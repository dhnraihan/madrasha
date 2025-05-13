// JavaScript for আমাদের মাদ্রাসা website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Gallery filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if(filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                galleryItems.forEach(item => {
                    if(filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if(faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                const isActive = faqItem.classList.contains('active');
                
                // Close all FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                    const toggleIcon = item.querySelector('.toggle-icon');
                    if(toggleIcon) toggleIcon.textContent = '+';
                });
                
                // Toggle the clicked item
                if(!isActive) {
                    faqItem.classList.add('active');
                    const toggleIcon = faqItem.querySelector('.toggle-icon');
                    if(toggleIcon) toggleIcon.textContent = '-';
                }
            });
        });
    }

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // For demonstration purposes, just show an alert
            alert('ধন্যবাদ! আপনার মেসেজ পাঠানো হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।');
            
            // Reset the form
            contactForm.reset();
        });
    }

    // Admission form submission handling
    const admissionForm = document.getElementById('admissionForm');
    if(admissionForm) {
        admissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // For demonstration purposes, just show an alert
            alert('ধন্যবাদ! আপনার আবেদন গৃহীত হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।');
            
            // Reset the form
            admissionForm.reset();
        });
    }

    // Mobile menu toggle (for responsive design)
    const createMobileMenu = () => {
        const header = document.querySelector('header');
        
        if(header) {
            // Create mobile menu button
            const mobileMenuBtn = document.createElement('button');
            mobileMenuBtn.className = 'mobile-menu-btn';
            mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
            
            // Insert button before nav
            const nav = header.querySelector('nav');
            if(nav) {
                header.insertBefore(mobileMenuBtn, nav);
                
                // Add event listener to button
                mobileMenuBtn.addEventListener('click', function() {
                    nav.classList.toggle('active');
                    this.classList.toggle('active');
                });
            }
        }
    };

    // Only create mobile menu for screens smaller than 768px
    if(window.innerWidth < 768) {
        createMobileMenu();
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        if(window.innerWidth < 768) {
            // If mobile menu button doesn't exist, create it
            if(!document.querySelector('.mobile-menu-btn')) {
                createMobileMenu();
            }
        } else {
            // Remove mobile menu button and reset nav styles for desktop
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const nav = document.querySelector('nav');
            
            if(mobileMenuBtn) {
                mobileMenuBtn.remove();
            }
            
            if(nav) {
                nav.classList.remove('active');
            }
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Skip links that don't point to an ID
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                e.preventDefault();
                
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 