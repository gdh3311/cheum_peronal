"use client";

import { useEffect, useRef, useState } from 'react';
import { Menu, ArrowUpRight, X } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetClose } from '@/components/ui/sheet';

const links = [['about', '채움 ON 소개'], ['programs', '체험 프로그램'], ['custom', '학교 맞춤 수업'], ['moments', '수업 이야기'], ['contact', '수업 문의하기']];

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const wide = window.matchMedia('(min-width: 981px)');
    const close = () => { if (wide.matches) setOpen(false); };
    wide.addEventListener('change', close);
    return () => wide.removeEventListener('change', close);
  }, []);
  return <Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger className="mobile-menu-trigger" aria-label="메뉴 열기"><Menu size={23}/></SheetTrigger>
    <SheetContent className="mobile-panel" showCloseButton={false}>
      <SheetClose className="mobile-menu-close" aria-label="메뉴 닫기"><X size={24}/></SheetClose>
      <SheetTitle className="mobile-menu-title">chaeum ON</SheetTitle>
      <SheetDescription className="mobile-menu-description">호기심을 켜고, 가능성을 채우다.</SheetDescription>
      <nav aria-label="모바일 주 메뉴" className="mobile-links">{links.map(([id,label],i)=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}><span>0{i+1}</span>{label}<ArrowUpRight size={20}/></a>)}</nav>
      <p className="mobile-menu-footer">아이들의 내일을 넓히는<br/>첫 번째 도전, 채움 ON.</p>
    </SheetContent>
  </Sheet>;
}

export function MotionEnhancements() {
  const progress = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    let frame = 0;
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0})`;
      document.querySelector('.header')?.classList.toggle('is-scrolled', window.scrollY > 24);
      const sections = [...document.querySelectorAll<HTMLElement>('main section[id]')];
      const current = sections.filter(s => s.getBoundingClientRect().top <= window.innerHeight * .4).at(-1)?.id;
      document.querySelectorAll<HTMLAnchorElement>('.header nav a').forEach(a => {
        if (a.hash === `#${current}`) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      });
      frame = 0;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (media.matches) return;
        const index = Number((entry.target as HTMLElement).dataset.motionIndex || 0);
        const animation = entry.target.animate([
          { opacity: 0, transform: 'translateY(26px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 680, delay: index * 65, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: .08 });
    document.querySelectorAll<HTMLElement>('.section-heading, .program-card, .method-layout > div, .custom-grid > div, .moments-grid figure, .contact-box').forEach((el,i) => {
      el.dataset.motionIndex = String(el.matches('.program-card, figure') ? i % 3 : 0);
      observer.observe(el);
    });
    const reduce = () => { if (media.matches) { animations.forEach(a => a.cancel()); animations.clear(); } };
    media.addEventListener('change', reduce);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const sizeObserver = new ResizeObserver(schedule);
    sizeObserver.observe(document.body);
    update();
    return () => {
      observer.disconnect(); sizeObserver.disconnect();
      animations.forEach(a => a.cancel());
      media.removeEventListener('change', reduce);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);
      document.querySelector('.header')?.classList.remove('is-scrolled');
      document.querySelectorAll('.header nav a').forEach(a => a.removeAttribute('aria-current'));
    };
  }, []);
  return <div ref={progress} className="reading-progress" aria-hidden="true"/>;
}
