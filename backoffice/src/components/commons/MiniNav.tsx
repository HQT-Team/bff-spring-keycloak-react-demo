export default function MiniNav() {
  return (
    <div className="py-1 bg-primary">
      <div className="container">
        <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
          <div className="col-lg-12 d-block">
            <div className="row d-flex">
              <div className="col-md pr-4 d-flex topper align-items-center my-1">
                <div className="icon mr-2 d-flex justify-content-center align-items-center">
                  <span className="bi bi-telephone-fill"></span>
                </div>
                <span className="text">+84 123 456</span>
              </div>
              <div className="col-md pr-4 d-flex topper align-items-center my-1">
                <div className="icon mr-2 d-flex justify-content-center align-items-center">
                  <span className="bi bi-send-fill"></span>
                </div>
                <span className="text">youremail@email.com</span>
              </div>
              <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right my-1">
                <span className="text">3-5 Business days delivery &amp; Free Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
