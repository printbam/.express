type="text/javascript">
      (function(){
          // Remplacez "YOUR_PUBLIC_KEY" par votre clé publique EmailJS
          emailjs.init("thg5rkoV_YE3VuWnU");
       })(); 
/* =====================================================
   GLASS CARD SPOTLIGHT EFFECT
===================================================== */
document.querySelectorAll('.glass').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
});

/* =====================================================
   THEME (LIGHT / DARK) — CLEAN & SAFE
===================================================== */
function applyLightTheme() {
    document.body.classList.add('light-mode');
}

function applyDarkTheme() {
    document.body.classList.remove('light-mode');
}

function toggleTheme() {
    const isLight = document.body.classList.toggle('light-mode');
    localStorage.setItem('printbam-theme', isLight ? 'light' : 'dark');
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('printbam-theme') === 'light') {
        applyLightTheme();
    }
});

/* =====================================================
   TYPEWRITER EFFECT — SAFE
===================================================== */
const typeTarget = document.getElementById('typewriter');

if (typeTarget) {
    const words = [
        "précision chirurgicale.",
        "vitesse absolue.",
        "fiabilité totale.",
        "élégance numérique."
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeLoop() {
        const word = words[wordIndex];

        typeTarget.textContent = deleting
            ? word.substring(0, --charIndex)
            : word.substring(0, ++charIndex);

        let delay = deleting ? 50 : 100;

        if (!deleting && charIndex === word.length) {
            deleting = true;
            delay = 1800;
        }

        if (deleting && charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 400;
        }

        setTimeout(typeLoop, delay);
    }

    typeLoop();
}

/* =====================================================
   NEON LINE HOVER EFFECT
===================================================== */
const neonLine = document.getElementById('neon-line');
const categoryButtons = document.querySelectorAll('.w-full.pt-8.pb-4 a');

if (neonLine && categoryButtons.length) {
    categoryButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            neonLine.classList.add(
                'max-w-md',
                'via-blue-500',
                'shadow-[0_0_20px_rgba(59,130,246,0.8)]',
                'opacity-100'
            );
            neonLine.classList.remove('max-w-xs', 'via-blue-500/20');
        });

        btn.addEventListener('mouseleave', () => {
            neonLine.classList.remove(
                'max-w-md',
                'via-blue-500',
                'shadow-[0_0_20px_rgba(59,130,246,0.8)]',
                'opacity-100'
            );
            neonLine.classList.add('max-w-xs', 'via-blue-500/20');
        });
    });
}

/* =====================================================
   PARALLAX BACKGROUND
===================================================== */
const bgGrid = document.getElementById('parallax-bg');

if (bgGrid) {
    window.addEventListener('scroll', () => {
        bgGrid.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    });

    window.addEventListener('mousemove', e => {
        bgGrid.style.left = `-${(e.clientX / window.innerWidth) * 15}px`;
        bgGrid.style.top = `-${(e.clientY / window.innerHeight) * 15}px`;
    });
}

/* =====================================================
   LOADER CLEAN
===================================================== */
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (!loader) return;

    setTimeout(() => {
        loader.classList.add('opacity-0');
        document.body.classList.add('loaded');

        setTimeout(() => loader.remove(), 700);
    }, 1200);
});

/* =====================================================
   NAVIGATION SCROLL LOGIC (DESKTOP + MOBILE)
===================================================== */
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const current = window.scrollY;

    const nav = document.getElementById('nav-main');
    const navContainer = document.querySelector('.nav-desktop-container');
    const mobileHeader = document.getElementById('mobile-header');

    if (nav) {
        nav.style.padding = current > 50 ? '12px 24px' : '16px 32px';
        nav.style.maxWidth = current > 50 ? '800px' : '1150px';
    }

    if (navContainer) {
        navContainer.classList.toggle(
            'nav-hidden',
            current > lastScroll && current > 200
        );
    }

    if (mobileHeader) {
        mobileHeader.classList.toggle('header-scrolled', current > 20);
    }

    document.querySelectorAll('.glass-header').forEach(header => {
        header.style.padding = current > 20 ? '8px 16px' : '12px 20px';
        header.style.margin = current > 20 ? '0 5px' : '0';
    });

    lastScroll = current;
});

/* =====================================================
   PWA INSTALL — CLEAN (MANUAL TRIGGER)
===================================================== */
let deferredPrompt;

// On capture l'événement mais on ne fait rien pour l'instant
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e; // On garde l'événement "au chaud"
});

// La fonction appelée par votre bouton Imprimer
function handlePrintAction() {
    // 1. On lance d'abord la demande d'installation si elle est disponible
    if (deferredPrompt) {
        deferredPrompt.prompt();

        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Utilisateur a installé l\'app');
            }
            deferredPrompt = null; // On vide pour ne pas redemander
        });
    }

    // 2. On lance la fonction d'impression réelle (qu'elle soit installée ou non)
    window.print(); 
}

    function toggleSidebar() {
    const mainContent = document.getElementById('main-content');
    const panel = document.getElementById('sidebar-panel');
    const overlay = document.getElementById('sidebar-overlay');

    const isOpen = panel.classList.contains('translate-x-0');

    if (!isOpen) {
        // OUVERTURE PRO
        panel.classList.replace('-translate-x-full', 'translate-x-0');
        panel.classList.replace('opacity-0', 'opacity-100');
        
        // Effet sur le contenu principal : il recule et s'arrondit
        mainContent.style.transform = 'translateX(280px) scale(0.82) perspective(2000px) rotateY(-12deg) rotateX(2deg)';
        mainContent.style.borderRadius = '32px';
        mainContent.style.overflow = 'hidden';
        mainContent.style.pointerEvents = 'none'; // Empêche de cliquer sur le site pendant que le menu est ouvert

        overlay.classList.remove('invisible');
        overlay.style.opacity = '1';
    } else {
        // FERMETURE PRO
        panel.classList.replace('translate-x-0', '-translate-x-full');
        panel.classList.replace('opacity-100', 'opacity-0');

        mainContent.style.transform = 'translateX(0) scale(1) rotateY(0)';
        mainContent.style.borderRadius = '0px';
        mainContent.style.pointerEvents = 'auto';

        overlay.style.opacity = '0';
        setTimeout(() => overlay.classList.add('invisible'), 500);
    }
}

// LOGIQUE DU THÈME
function setTheme(theme, save = true) {
    const pill = document.getElementById('theme-pill');
    const darkBtn = document.getElementById('dark-btn');
    const lightBtn = document.getElementById('light-btn');

    if (theme === 'light') {
        document.body.classList.add('light-mode');
        pill.style.transform = 'translateX(105%)';
        lightBtn.classList.replace('text-white/30', 'text-black');
        darkBtn.classList.replace('text-white', 'text-black/30');
        if(save) localStorage.setItem('user-theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        pill.style.transform = 'translateX(0%)';
        darkBtn.classList.replace('text-white/30', 'text-white');
        lightBtn.classList.replace('text-white', 'text-white/30');
        if(save) localStorage.setItem('user-theme', 'dark');
    }
}

// DÉTECTION AUTOMATIQUE (Standard 2026)
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('user-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Si pas de choix manuel, on suit le système, sinon on prend le choix sauvegardé
    if (savedTheme === 'light' || (!savedTheme && !systemPrefersDark)) {
        setTheme('light', false);
    } else {
        setTheme('dark', false);
    }
});

    function toggleSettings() {
    const overlay = document.getElementById('settings-overlay');
    const panel = document.getElementById('settings-panel');
    const bg = overlay.querySelector('div:first-child');

    if (overlay.classList.contains('invisible')) {
        overlay.classList.remove('invisible');
        setTimeout(() => {
            bg.classList.replace('opacity-0', 'opacity-100');
            panel.classList.replace('translate-x-full', 'translate-x-0');
        }, 10);
    } else {
        bg.classList.replace('opacity-100', 'opacity-0');
        panel.classList.replace('translate-x-0', 'translate-x-full');
        setTimeout(() => {
            overlay.classList.add('invisible');
        }, 500);
    }
}
    function toggleSupport() {
    const overlay = document.getElementById('support-overlay');
    const panel = document.getElementById('support-panel');
    const bg = overlay.querySelector('div:first-child');

    if (overlay.classList.contains('invisible')) {
        overlay.classList.remove('invisible');
        setTimeout(() => {
            bg.classList.replace('opacity-0', 'opacity-100');
            panel.classList.replace('translate-x-full', 'translate-x-0');
        }, 10);
    } else {
        bg.classList.replace('opacity-100', 'opacity-0');
        panel.classList.replace('translate-x-0', 'translate-x-full');
        setTimeout(() => overlay.classList.add('invisible'), 600);
    }
}
    function handleSupportSubmit(event) {
    event.preventDefault();
    
    const btn = document.getElementById('btn-send-support');
    const form = document.getElementById('support-form');
    const successMsg = document.getElementById('support-success');

    // État de chargement
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-circle-notch animate-spin"></i> <span>Transmission...</span>';

    // Paramètres à envoyer (doivent correspondre aux tags {{}} dans votre template EmailJS)
    const params = {
        subject: form.querySelector('select').value,
        message: form.querySelector('textarea').value,
        from_name: "Client PrintBam", // Vous pouvez ajouter un champ "Nom" si besoin
        reply_to: "client@email.com"  // Vous pouvez ajouter un champ "Email" si besoin
    };

    // ENVOI RÉEL
    emailjs.send("service_mqmo86w", "template_6d200nf", params)
        .then(() => {
            // Succès
            form.classList.add('hidden');
            successMsg.classList.remove('hidden');
            form.reset();
        }, (error) => {
            // Erreur
            alert("Erreur lors de l'envoi. Veuillez réessayer.");
            btn.disabled = false;
            btn.innerHTML = '<span>Réessayer</span>';
            console.log('FAILED...', error);
        });
}
    // Données de test (à supprimer une fois vos premières commandes passées)
let orders = JSON.parse(localStorage.getItem('printbam_orders')) || [];

function toggleOrders() {
    renderOrders(); // Rafraîchir la liste avant d'ouvrir
    const overlay = document.getElementById('orders-overlay');
    const panel = document.getElementById('orders-panel');
    const bg = overlay.querySelector('div:first-child');

    if (overlay.classList.contains('invisible')) {
        overlay.classList.remove('invisible');
        setTimeout(() => {
            bg.classList.replace('opacity-0', 'opacity-100');
            panel.classList.replace('translate-x-full', 'translate-x-0');
        }, 10);
    } else {
        bg.classList.replace('opacity-100', 'opacity-0');
        panel.classList.replace('translate-x-0', 'translate-x-full');
        setTimeout(() => overlay.classList.add('invisible'), 600);
    }
}

// Fonction pour ajouter une commande (Appelez ceci quand l'utilisateur valide une impression)
function saveNewOrder(docName, price) {
    const newOrder = {
        id: 'PB-' + Math.floor(Math.random() * 10000),
        date: new Date().toLocaleDateString('fr-FR'),
        item: docName,
        amount: price,
        status: 'En cours'
    };
    orders.unshift(newOrder); // Ajouter au début de la liste
    localStorage.setItem('printbam_orders', JSON.stringify(orders));
}

// Affichage dynamique
function renderOrders() {
    const list = document.getElementById('orders-list');
    const totalDisplay = document.getElementById('total-spent');
    
    if (orders.length === 0) {
        document.getElementById('no-orders').classList.remove('hidden');
        return;
    }

    document.getElementById('no-orders').classList.add('hidden');
    list.innerHTML = '';
    let total = 0;

    orders.forEach(order => {
        total += order.amount;
        list.innerHTML += `
            <div class="bg-white/[0.02] border border-white/[0.05] p-4 rounded-2xl flex items-center justify-between group hover:border-blue-500/30 transition-all text-left">
                <div class="flex flex-col gap-1">
                    <span class="text-[10px] font-black text-blue-500 uppercase">${order.id}</span>
                    <span class="text-sm font-bold text-white">${order.item}</span>
                    <span class="text-[10px] text-white/30">${order.date}</span>
                </div>
                <div class="flex flex-col items-end gap-2">
                    <span class="text-sm font-black text-white">${order.amount} FC</span>
                    <span class="px-2 py-1 rounded-md bg-blue-500/10 text-blue-500 text-[8px] font-black uppercase tracking-tighter">
                        ${order.status}
                    </span>
                </div>
            </div>
        `;
    });
    totalDisplay.innerText = total + " FC";
}
    let clearStep = 0; // État de la confirmation

function confirmClearHistory() {
    const btn = document.getElementById('btn-clear-history');
    const text = document.getElementById('clear-text');

    if (clearStep === 0) {
        // Premier clic : Demander confirmation
        clearStep = 1;
        text.innerText = "Êtes-vous sûr ?";
        btn.classList.replace('text-white/20', 'text-red-500');
        
        // Annuler la demande de confirmation après 3 secondes si pas de clic
        setTimeout(() => {
            if (clearStep === 1) resetClearBtn();
        }, 3000);
        
    } else {
        // Deuxième clic : Exécution de la suppression
        executeClearHistory();
    }
}

function executeClearHistory() {
    // 1. Vider le tableau en mémoire
    orders = [];
    // 2. Mettre à jour le stockage local
    localStorage.removeItem('printbam_orders');
    // 3. Rafraîchir l'affichage
    renderOrders();
    // 4. Réinitialiser le bouton
    resetClearBtn();
}

function resetClearBtn() {
    const btn = document.getElementById('btn-clear-history');
    const text = document.getElementById('clear-text');
    clearStep = 0;
    text.innerText = "Vider l'historique";
    btn.classList.replace('text-red-500', 'text-white/20');
}
