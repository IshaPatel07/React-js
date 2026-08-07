// import React from 'react'

// export default function Navbar() {
//     return (
//         <div className=' m-3 col-8 d-flex justify-content-end'><nav className="navbar bg-body-tertiary">
//             <div className="container-fluid">
//                 <form className="d-flex" role="search">
//                     <input
//                         className="form-control me-2"
//                         type="search"
//                         placeholder="Search"
//                         aria-label="Search"
//                     />
//                     <>
//                         {/* Example single danger button */}
//                         <div className="btn-group">
//                             <button
//                                 type="button"
//                                 className="btn btn-primary dropdown-toggle"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                             >
//                                 All categories
//                             </button>
//                             <ul className="dropdown-menu">
//                                 <li>
//                                     <a className="dropdown-item" href="#">
//                                         Action
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="#">
//                                         Another action
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="#">
//                                         Something else here
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <hr className="dropdown-divider" />
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="#">
//                                         Separated link
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </>

//                 </form>
//             </div>
//         </nav>
//         </div>
//     )
// }


import { useSelector } from "react-redux";

function Navbar() {
    const blogs = useSelector((state) => state.blog.blogs);

    return (
        <nav className="navbar d-flex justify-content-center">
            <h2 className="mx-3">📝 Blog Management</h2>

            <div className="Total mx-5" >
                Total Blogs : {blogs.length}
            </div>
        </nav >
    );
}

export default Navbar;