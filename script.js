
        // Initialize Three.js scene
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            alpha: true
        });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);
        
        // Create particles with your brand colors
        const particlesGeometry = new THREE.BufferGeometry();
        const particleCount = 1500;
        
        const posArray = new Float32Array(particleCount * 3);
        const colorArray = new Float32Array(particleCount * 3);
        
        for(let i = 0; i < particleCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
            // Use your color scheme (4CAF50 and 2E7D32)
            colorArray[i] = Math.random() > 0.7 ? 0.3 : (Math.random() > 0.3 ? 0.68 : 0.2);
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
        
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);
        
        // Add central sphere
        const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x4CAF50, // Your main color
            transparent: true,
            opacity: 0.15,
            wireframe: true
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);
        
        // Camera position
        camera.position.z = 5;
        
        // Mouse movement variables
        let mouseX = 0;
        let mouseY = 0;
        
        // Handle mouse movement
        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });
        
        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            
            // Rotate particles
            particlesMesh.rotation.x += 0.0005;
            particlesMesh.rotation.y += 0.0005;
            
            // Rotate sphere
            sphere.rotation.x += 0.001;
            sphere.rotation.y += 0.001;
            
            // Camera movement based on mouse
            camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
            camera.position.y += (mouseY * 2 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);
            
            renderer.render(scene, camera);
        }
        
        // Handle window resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
        
        animate();
        
        // Navbar toggle
        let menuIcon = document.querySelector('#menu-icon');
        let navbar = document.querySelector('.navbar');
        
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };
        
        // Close navbar when scrolling
        window.onscroll = () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        };
        
        // Add animation to cards when they come into view
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.project-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transitionDelay = `${index * 0.1}s`;
                observer.observe(card);
            });
        });
