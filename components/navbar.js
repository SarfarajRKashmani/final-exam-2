export const navbar=()=>{
    return `<nav class="navbar">
            <a href="#" class="logo">E-Course</a>
            <ul class="nav-links">
                <li><a href="/index.html"><i class="fas fa-home"></i> Home</a></li>
                <li><a href="/pages/course.html"><i class="fas fa-book"></i> Courses</a></li>
                <li><a href="/pages/add.html"><i class="fa-regular fa-square-plus"></i> Add Course</a></li>
                <li><a href="/pages/dashboard.html"><i class="fa-solid fa-chalkboard"></i> Dashboard</a></li>
                <li><a href="/pages/login.html"><i class="fas fa-user"></i> Login</a></li>
                <li><a href="/pages/signup.html"><i class="fa-solid fa-user-plus"></i> Signup</a></li>
            </ul>
        </nav>`
}
export const style=()=>{
    return `body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 1rem;
}

.navbar .logo {
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
}

.navbar .nav-links {
    list-style: none;
    display: flex;
}

.navbar .nav-links li {
    margin-left: 1rem;
}

.navbar .nav-links a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
}

.navbar .nav-links a:hover {
    color: #ddd;
}

main {
    padding: 2rem;
    text-align: center;
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.social-icons {
    list-style: none;
    display: flex;
    justify-content: center;
}

.social-icons li {
    margin: 0 0.5rem;
}

.social-icons a {
    color: #fff;
    font-size: 1.2rem;
    text-decoration: none;
}

.social-icons a:hover {
    color: #ddd;
}
`
}
export const footer=()=>{
    return `<footer>
        <p>&copy; 2024 E-Course Learning. All rights reserved.</p>
        <ul class="social-icons">
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>
    </footer>`
}