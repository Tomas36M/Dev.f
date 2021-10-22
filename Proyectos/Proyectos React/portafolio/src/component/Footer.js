import React from "react";

export default class Footer extends React.Component {
    render()
    {
        console.log(this.props);
        return(
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Links</h3>
                            <ul>
                                <li><a href="#">Cv</a></li>
                                <li><a href="#">Email</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Links</h3>
                            <ul>
                                <li><a href="">Github</a></li>
                                <li><a href="">Linked-in</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>Company Name</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. w</p>
                        </div>
                        <div class="col-lg-3 item social ">
                            <a href="#"><i class="bi bi-facebook"></i></a>
                            <a href="#"><i class="icon icon-social-twitter"></i></a>
                            <a href="#"><i class="icon icon-social-snapchat"></i></a>
                            <a href="#"><i class="icon icon-social-instagram"></i></a>    
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        )
    }
}