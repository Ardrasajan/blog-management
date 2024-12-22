import "../Assets/Style/Registration.css";

import img from "../Assets/Images/img1.jpg";
export const Registation = () => {
  return (
    // todo include navbar with blog mgmt on left...home,signin,signout on rightside
    //navigate to sign in page
    // need to design forget password page....email,password, newpassword
    <div className="row blog-signUp  ">
      <div class="col-6 blog-signUp-leftBox">
        <div className="blog-signUp-leftBox-content">
        <h1>Blog Management</h1><br></br>
        <img src={img} alt="" />
        </div>
      </div>
      <div class="col-6 blog-signUp-rightBox ">
        <div className="blog-signUp-inputBox shadow">
          <h4 className="my-4 header">Sign Up</h4>
          <form action="">
            <div class="row my-3 mx-2">
              <div class="col">
                <label htmlFor="">User Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                />
              </div>
              <div class="col">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter email id here"
                />
              </div>
            </div>
            <div class="row my-3 mx-2">
            <div class="col">
                <label htmlFor="">Date of Birth</label>
                <input type="text" class="form-control" placeholder="dob" />
              </div>
              <div class="col">
              <label>Select the Gender:</label><br></br>
              <select name="gender" className="form-control user_signup_select">
            <option value="male">Male</option>
            <option value="female">Female</option>
           
          </select>

              </div>
              </div>
            <div class="row my-3 mx-2">
              <div class="col">
                <label htmlFor="">place</label>
                <input type="text" class="form-control" placeholder="place" />
              </div>
              <div class="col">
                <label htmlFor="">City</label>
                <input type="text" class="form-control" placeholder="City" />
              </div>
            </div>
            <div class="row my-3 mx-2">
            <div class="col">
            <label>select state</label>
          <br></br>
          <select name="state" className="form-control user_signup_select" >
            <option value="TamilNadu">TamilNadu</option>
            <option value="Kerala">Kerala</option>
            <option value="Karnataka">Karnataka</option>
          </select>
            </div>
            <div class="col">
                <label htmlFor="">Phone number</label>
                <input type="text" class="form-control" placeholder="phone number" />
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
            <div className="user_signup_forgetpassword">
            <a href='#' className="my-3 ">Forget Password ?</a>
            <a href='#' className="my-3 ">Already have an account? Login</a>
            
            
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};
