import style from './Contactus.module.css';
export default function Contact(){
    return (
        <div className={style.About}>
        <div className={style.Div1}>
        <iframe width=""
        height=""
        src=
        "https://www.youtube.com/embed/tmg6d3T_T6Q"
        title="GeeksforGeeks" >
        </iframe>
        </div>
        <div className={style.Div2}>
          <div className="container">
            <form action="/action_page.php">
            <div className="row">
                <div className="col-25">
                <label htmlFor="fname">First Name</label>
                </div>
                <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
            </div>
            </div>
            <div className="row">
                <div className="col-25">
                <label htmlFor="lname">Last Name</label>
                </div>
                <div className="col-75">
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                </div>
            </div>
            <div className="row">
            <div className="col-25">
            <label htmlFor="country">Country</label>
            </div>
            <div className="col-75">
            <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
            </select>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
            <label htmlFor="subject">Subject</label>
            </div>
            <div className="col-75">
            <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
            </div>
        </div>
        <br/>
        <div className="row">
            <input type="submit" value="Submit"/>
        </div>
        </form>
</div>
</div>
</div>
    )
}