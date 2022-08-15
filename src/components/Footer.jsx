import React from 'react'

const Footer = () => {
  return (
    <footer className="footer py-3">
        <div className="container">
            <p className="small mb-0 text-light">
                &copy; <script>document.write(new Date().getFullYear())</script> Created With <i className="ti-heart text-danger"></i> By <a href="http://devcrud.com" rel="noreferrer" target="_blank" ><span className="text-danger" title="Bootstrap 4 Themes and Dashboards">DevCRUD</span></a> 
            </p>
        </div>
    </footer>
  )
}

export default Footer