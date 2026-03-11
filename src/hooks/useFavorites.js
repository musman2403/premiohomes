import { useState, useCallback } from 'react';

function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name, value, days = 365) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/`;
}

export default function useFavorites() {
    const [favorites, setFavorites] = useState(() => {
        try {
            const raw = getCookie('favorites');
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    });

    const toggleFavorite = useCallback((title) => {
        setFavorites((prev) => {
            const next = prev.includes(title)
                ? prev.filter((t) => t !== title)
                : [...prev, title];
            setCookie('favorites', JSON.stringify(next));
            return next;
        });
    }, []);

    const isFavorite = useCallback(
        (title) => favorites.includes(title),
        [favorites]
    );

    return { favorites, toggleFavorite, isFavorite };
}
