import React from 'react'

function Footer1() {
    const year = new Date().getFullYear();
    return (
       <>
        <footer class="footer">
            <p class="footer__title">Darshana</p>
            <div class="footer__social">
                <a href="https://www.linkedin.com/in/darshanadey/" class="footer__icon"><i class='bx bxl-linkedin' ></i></a>
                <a href="https://www.instagram.com/sweet_darsh_/" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
                <a href="https://github.com/deydarshana" class="footer__icon"><i class='bx bxl-github' ></i></a>
            </div>
            <p>&#169; {year} copyright all right reserved</p>
        </footer>
       </>
    )
}

export default Footer1
