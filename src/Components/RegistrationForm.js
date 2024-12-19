import "../Assets/Style/Registration.css";

import img from "../Assets/Images/img1.jpg";
export const Registation = () => {
  return (
    <div className="row blog-signUp  ">
      <div class="col-6 blog-signUp-leftBox">
        <h1>Blog Management</h1>
        <img src={img} alt="" />
      </div>
      <div class="col-6 blog-signUp-rightBox ">
        <div className="blog-signUp-inputBox shadow">
          <h1 className="my-4">Sign Up</h1>
          <form action="">
            <div class="row my-3 mx-2">
              <div class="col">
                <label htmlFor="">First name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col">
                <label htmlFor="">last Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div class="row my-3 mx-2">
              <div class="col">
                <label htmlFor="">Contact</label>
                <input type="text" class="form-control" placeholder="contact" />
              </div>
              <div class="col">
                <label htmlFor="">Email</label>
                <input type="text" class="form-control" placeholder="Email" />
              </div>
            </div>
            <div class="row my-3 mx-2">
              <div class="col">
                <label htmlFor="">Password</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="col">
                <label htmlFor="">Confirm password</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Confirm password"
                />
              </div>
            </div>

            <button className="blog-signUp-inputBox-btn my-3">Sign Up</button>
            <h6 className="my-3 text-primary">Forget Password ?</h6>
          </form>
        </div>
      </div>
    </div>
  );
};
