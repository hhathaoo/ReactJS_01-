import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">About Us (Me)</h1>
      <p>
        This Web App is built by{" "}
        <a
          className="profile-link"
          href=""
          target="_blank"
        >
          mE.
        </a>
        <br></br>
        Used Technologies/Libraries - React.js, React Hooks, Axios, MUI and many more...  
       
      </p>
    </div>
  );
}
export default AboutUs;
