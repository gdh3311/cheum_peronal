'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, ArrowUpRight, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet';
import { navLinks } from './site';

const links = [...navLinks, ['/contact', '수업 문의하기'] as const];

/**
 * Client-side navigation lands at the top of the new page even when the URL
 * carries a hash, so cross-page anchors (/programs#ai-digital, /#faq) never
 * reach their target. The section also mounts after the URL changes, and the
 * router resets scroll once more afterwards — so re-assert the position for a
 * short window, instantly (a smooth scroll would be cut off mid-animation),
 * and give up the moment the reader takes over.
 */
/**
 * A client-side route change swaps the content without a page load, so screen
 * readers get no signal that anything happened. Announce the new title.
 */
export function RouteAnnouncer() {
  const pathname = usePathname();
  const [label, setLabel] = useState('');
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      // The initial load is announced by the browser itself.
      first.current = false;
      return;
    }
    // The document title is committed a tick after the route does.
    const timer = setTimeout(() => setLabel(document.title), 120);
    return () => clearTimeout(timer);
  }, [pathname]);
  return (
    <p aria-live="polite" aria-atomic="true" className="visually-hidden">
      {label}
    </p>
  );
}

export function HashScroll() {
  const pathname = usePathname();
  useEffect(() => {
    let frame = 0;
    let stopped = false;
    const release = () => {
      stopped = true;
    };
    const jump = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      stopped = false;
      let tries = 0;
      const attempt = () => {
        if (stopped) return;
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: 'instant', block: 'start' });
        if (tries++ < 40) frame = requestAnimationFrame(attempt);
      };
      attempt();
    };
    jump();
    window.addEventListener('hashchange', jump);
    window.addEventListener('wheel', release, { passive: true });
    window.addEventListener('touchstart', release, { passive: true });
    window.addEventListener('keydown', release);
    return () => {
      window.removeEventListener('hashchange', jump);
      window.removeEventListener('wheel', release);
      window.removeEventListener('touchstart', release);
      window.removeEventListener('keydown', release);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);
  return null;
}

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const wide = window.matchMedia('(min-width: 981px)');
    const close = () => {
      if (wide.matches) setOpen(false);
    };
    wide.addEventListener('change', close);
    return () => wide.removeEventListener('change', close);
  }, []);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="mobile-menu-trigger" aria-label="메뉴 열기">
        <Menu size={23} />
      </SheetTrigger>
      <SheetContent className="mobile-panel" showCloseButton={false}>
        <SheetClose className="mobile-menu-close" aria-label="메뉴 닫기">
          <X size={24} />
        </SheetClose>
        <SheetTitle className="mobile-menu-title">chaeum ON</SheetTitle>
        <SheetDescription className="mobile-menu-description">
          호기심을 켜고, 가능성을 채우다.
        </SheetDescription>
        <nav aria-label="모바일 주 메뉴" className="mobile-links">
          {links.map(([href, label], i) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              <span>0{i + 1}</span>
              {label}
              <ArrowUpRight size={20} />
            </Link>
          ))}
        </nav>
        <p className="mobile-menu-footer">
          아이들의 내일을 넓히는
          <br />첫 번째 도전, 채움 ON.
        </p>
      </SheetContent>
    </Sheet>
  );
}

export function MotionEnhancements() {
  const progress = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    let frame = 0;
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current)
        progress.current.style.transform = `scaleX(${height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0})`;
      document
        .querySelector('.header')
        ?.classList.toggle('is-scrolled', window.scrollY > 24);
      const sections = [
        ...document.querySelectorAll<HTMLElement>('main section[id]'),
      ];
      const current = sections
        .filter(
          (s) => s.getBoundingClientRect().top <= window.innerHeight * 0.4,
        )
        .at(-1)?.id;
      const path = window.location.pathname;
      document
        .querySelectorAll<HTMLAnchorElement>('.header nav a')
        .forEach((a) => {
          const url = new URL(a.href);
          const active =
            url.pathname === path &&
            (url.hash ? url.hash === `#${current}` : path !== '/');
          if (active) a.setAttribute('aria-current', 'page');
          else a.removeAttribute('aria-current');
        });
      frame = 0;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          if (media.matches) return;
          const index = Number(
            (entry.target as HTMLElement).dataset.motionIndex || 0,
          );
          const animation = entry.target.animate(
            [
              { opacity: 0, transform: 'translateY(26px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            {
              duration: 680,
              delay: index * 65,
              easing: 'cubic-bezier(.22,1,.36,1)',
              fill: 'backwards',
            },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll<HTMLElement>(
        '.section-heading, .program-card, .method-layout > div, .custom-grid > div, .moments-grid figure, .process-card, .faq-intro, .faq-list, .contact-box, .program-detail, .value-card, .page-cta-box, .about-story-grid > div',
      )
      .forEach((el, i) => {
        el.dataset.motionIndex = String(
          el.matches('.program-card, figure, .process-card') ? i % 4 : 0,
        );
        observer.observe(el);
      });
    const reduce = () => {
      if (media.matches) {
        animations.forEach((a) => a.cancel());
        animations.clear();
      }
    };
    media.addEventListener('change', reduce);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const sizeObserver = new ResizeObserver(schedule);
    sizeObserver.observe(document.body);
    update();
    return () => {
      observer.disconnect();
      sizeObserver.disconnect();
      animations.forEach((a) => a.cancel());
      media.removeEventListener('change', reduce);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);
      document.querySelector('.header')?.classList.remove('is-scrolled');
      document
        .querySelectorAll('.header nav a')
        .forEach((a) => a.removeAttribute('aria-current'));
    };
  }, []);
  return <div ref={progress} className="reading-progress" aria-hidden="true" />;
}
