'use client';

import { useState, useEffect, useCallback } from 'react';

export function useMobileNav() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	const close = useCallback(() => {
		setIsOpen(false);
	}, []);

	// Блокируем скролл body когда меню открыто
	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	// Закрываем по Escape
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape') close();
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [close]);

	return { isOpen, toggle, close };
}
