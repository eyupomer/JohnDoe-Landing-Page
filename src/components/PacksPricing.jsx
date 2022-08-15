const PacksPricing = () => {
  return (
    <section className="section bg-custom-gray" id="price">
        <div className="container">
            <h1 className="mb-5"><span className="text-danger">Packs</span> Pricing</h1>
            <div className="row align-items-center">
                <div className="col-md-6 col-lg-3">
                    <div className="price-card text-center mb-4">
                        <h3 className="price-card-title">Free</h3>
                        <div className="price-card-cost">
                            <sup className="ti-money"></sup>
                            <span className="num">0</span>
                            <span className="date">MO</span>
                        </div>
                        <ul className="list">
                            <li className="list-item">5 <span className="text-muted">Project</span></li>
                            <li className="list-item">1GB <span className="text-muted">Storage</span></li>
                            <li className="list-item"><span className="text-muted">No Domain</span></li>
                            <li className="list-item">1 <span className="text-muted">User</span></li>
                        </ul>
                        <button className="btn btn-primary btn-rounded w-lg">Subscribe</button>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="price-card text-center mb-4">
                        <h3 className="price-card-title">Basic</h3>
                        <div className="price-card-cost">
                            <sup className="ti-money"></sup>
                            <span className="num">10</span>
                            <span className="date">MO</span>
                        </div>
                        <ul className="list">
                            <li className="list-item">50 <span className="text-muted">Project</span></li>
                            <li className="list-item">10GB <span className="text-muted">Storage</span></li>
                            <li className="list-item">1<span className="text-muted">Domain</span></li>
                            <li className="list-item">5 <span className="text-muted">User</span></li>
                        </ul>
                        <button className="btn btn-primary btn-rounded w-lg">Subscribe</button>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="price-card text-center price-card-requried mb-4">
                        <h3 className="price-card-title">Exclusive</h3>
                        <div className="price-card-cost">
                            <sup className="ti-money"></sup>
                            <span className="num">25</span>
                            <span className="date">MO</span>
                        </div>
                        <ul className="list">
                            <li className="list-item">150 <span className="text-muted">Project</span></li>
                            <li className="list-item">15GB <span className="text-muted">Storage</span></li>
                            <li className="list-item">5<span className="text-muted"> Domain</span></li>
                            <li className="list-item">15<span className="text-muted">User</span></li>
                        </ul>
                        <button className="btn btn-primary btn-rounded w-lg">Subscribe</button>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="price-card text-center mb-4">
                        <h3 className="price-card-title">Pro</h3>
                        <div className="price-card-cost">
                            <sup className="ti-money"></sup>
                            <span className="num">99</span>
                            <span className="date">MO</span>
                        </div>
                        <ul className="list">
                            <li className="list-item">500 <span className="text-muted">Project</span></li>
                            <li className="list-item">1000GB <span className="text-muted">Storage</span></li>
                            <li className="list-item">10<span className="text-muted"> Domain</span></li>
                            <li className="list-item">Unlimite<span className="text-muted">User</span></li>
                        </ul>
                        <button className="btn btn-primary btn-rounded w-lg">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PacksPricing