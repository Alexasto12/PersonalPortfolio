document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('section');
    const sectionOffsets = Array.from(sections).map(section => section.offsetTop);
    const menuItems = document.querySelectorAll('#myMenu li a');
    let isScrolling = false;

    window.addEventListener('wheel', (event) => {
        if (!isScrolling) {
            isScrolling = true;
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            let closestSectionIndex = 0;
            let closestSectionDistance = Math.abs(scrollPosition - sectionOffsets[0]);

            for (let i = 1; i < sectionOffsets.length; i++) {
                const distance = Math.abs(scrollPosition - sectionOffsets[i]);
                if (distance < closestSectionDistance) {
                    closestSectionIndex = i;
                    closestSectionDistance = distance;
                }
            }

            if (event.deltaY > 0 && closestSectionIndex < sections.length - 1) {
                closestSectionIndex++;
            } else if (event.deltaY < 0 && closestSectionIndex > 0) {
                closestSectionIndex--;
            }

            window.scrollTo({
                top: sectionOffsets[closestSectionIndex],
                behavior: 'smooth'
            });

            menuItems.forEach(item => item.classList.remove('active'));
            menuItems[closestSectionIndex].classList.add('active');

            setTimeout(() => {
                isScrolling = false;
            }, 1000); // Ajusta el tiempo según sea necesario
        }
    });

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        let closestSectionIndex = 0;
        let closestSectionDistance = Math.abs(scrollPosition - sectionOffsets[0]);

        for (let i = 1; i < sectionOffsets.length; i++) {
            const distance = Math.abs(scrollPosition - sectionOffsets[i]);
            if (distance < closestSectionDistance) {
                closestSectionIndex = i;
                closestSectionDistance = distance;
            }
        }

        menuItems.forEach(item => item.classList.remove('active'));
        menuItems[closestSectionIndex].classList.add('active');
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}