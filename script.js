document.addEventListener("DOMContentLoaded", () => {
    // 1. Chức năng cuộn mượt (Smooth Scrolling) cho Menu
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Cuộn xuống phần tử đích, trừ hao khoảng cách của thanh menu cố định (nav)
                const headerOffset = 70; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 2. Chức năng Mở rộng / Thu gọn toàn bộ cây Hệ Phả
    const expandAllBtn = document.getElementById("expandAll");
    const collapseAllBtn = document.getElementById("collapseAll");
    
    if (expandAllBtn && collapseAllBtn) {
        expandAllBtn.addEventListener("click", () => {
            const allDetails = document.querySelectorAll("#phan-4 details");
            allDetails.forEach(detail => {
                detail.setAttribute("open", "");
            });
        });

        collapseAllBtn.addEventListener("click", () => {
            const allDetails = document.querySelectorAll("#phan-4 details");
            allDetails.forEach(detail => {
                detail.removeAttribute("open");
            });
        });
    }

    // 3. Chức năng xem ảnh lớn (Lightbox)
    const galleryImages = document.querySelectorAll('.image-gallery img');

    if (galleryImages.length > 0) {
        // Tạo phần tử modal (lớp phủ màn hình)
        const modal = document.createElement('div');
        modal.classList.add('image-modal');
        
        // Tạo thẻ img bên trong modal
        const modalImg = document.createElement('img');
        modal.appendChild(modalImg);
        
        // Thêm modal vào body
        document.body.appendChild(modal);

        // Sự kiện click mở ảnh
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                modalImg.src = img.src; // Lấy nguồn ảnh được click gán vào ảnh trong modal
                modal.classList.add('active'); // Hiển thị modal
                document.body.style.overflow = 'hidden'; // Ngăn cuộn trang web khi đang xem ảnh
            });
        });

        // Sự kiện click đóng ảnh (click ra ngoài hoặc click vào ảnh đều đóng)
        modal.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Cho phép cuộn trang web trở lại
        });
    }
});