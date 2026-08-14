/* ============================================
   HB STORE — Modern Theme JavaScript
   Scroll animations, sticky header, & UX enhancements
   ============================================ */

(function() {
  'use strict';

  // ---- Sticky Header ----
  var header = document.querySelector('.header');
  var lastScroll = 0;

  function handleScroll() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (header) {
      if (currentScroll > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    lastScroll = currentScroll;
  }

  // ---- Scroll-Triggered Reveal Animations ----
  function initRevealAnimations() {
    // Add .reveal class to key sections
    var sections = document.querySelectorAll(
      '.service, .product, .welcome, .home-newsletter, .home-blog, ' +
      '.page, .page-banner, .headline, .user-content, .cform'
    );

    sections.forEach(function(section) {
      if (!section.classList.contains('reveal')) {
        section.classList.add('reveal');
      }
    });

    // Add stagger animation to product rows
    var productRows = document.querySelectorAll('.product .row');
    productRows.forEach(function(row) {
      if (row.querySelector('.item') || row.querySelector('.item-product-cat')) {
        row.classList.add('reveal-stagger');
        row.classList.add('reveal');
      }
    });

    // Use IntersectionObserver for performance
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      document.querySelectorAll('.reveal').forEach(function(el) {
        observer.observe(el);
      });
    } else {
      // Fallback: just show everything
      document.querySelectorAll('.reveal').forEach(function(el) {
        el.classList.add('revealed');
      });
    }
  }

  // ---- Smooth Scroll for Anchor Links ----
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ---- Product Card Hover Enhancement ----
  function initProductCardEffects() {
    var cards = document.querySelectorAll('.product .item');
    cards.forEach(function(card) {
      card.addEventListener('mouseenter', function() {
        this.style.willChange = 'transform, box-shadow';
      });
      card.addEventListener('mouseleave', function() {
        this.style.willChange = 'auto';
      });
    });
  }

  // ---- Image Lazy Loading Enhancement ----
  function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy loading
      document.querySelectorAll('img').forEach(function(img) {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
      });
    }
  }

  // ---- Form Focus Enhancement ----
  function initFormEnhancements() {
    var formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(function(group) {
      var input = group.querySelector('.form-control');
      if (input) {
        input.addEventListener('focus', function() {
          group.classList.add('focused');
        });
        input.addEventListener('blur', function() {
          group.classList.remove('focused');
        });
      }
    });
  }

  // ---- Page Load Transition ----
  function initPageTransition() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.4s ease';
    
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        document.body.style.opacity = '1';
      });
    });
  }

  // ---- Initialize on DOM Ready ----
  function init() {
    initPageTransition();
    initRevealAnimations();
    initSmoothScroll();
    initProductCardEffects();
    initLazyLoading();
    initFormEnhancements();
    
    // Attach scroll handler
    var ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Initial call
    handleScroll();
  }

  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
