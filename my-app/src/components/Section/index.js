import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";


function Section() {
   return (
   <><section className="main-section">
           <div>
               <img src={icon1} alt="declarative" />
               <h2> Declarative</h2>
               <p> React makes it <br /> painless to create <br /> interactive UIs.</p>
           </div>
           <img src={icon2} alt="components" />
           <h2> Components</h2>
           <p> Build encapsulated <br /> components that <br /> manage their stag.e</p>
       </div><div>
               <img src={icon3} alt="single-way" />
               <h2> Single way </h2>
               <p> A set of immutable <br /> values are passed to <br /> the components.</p>
           </div><div>
               <img src={icon4} alt="jsx" />
               <h2> JSX</h2>
               <p> Statically-typed, <br /> designed to run on <br /> modern browsers.</p>
           </div></>
    
  );

}

export default Section;

