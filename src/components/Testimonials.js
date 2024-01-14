import TestimonialsCard from "./TestimonialsCard";
import person1 from "../assets/1.jpg"
import person2 from "../assets/2.jpg"
import person3 from "../assets/4.jpg"
import person4 from "../assets/5.jpg"
import style from "../styles/testimonials.module.css"

const Testimonials = () => {
    return (
        <div className={style.section}>
            <div className={style.testimonials}>
                <h1 className={style.heading}>
                    testimonials
                </h1>
                <div className={style.testimonials_section}>
                    <TestimonialsCard img={person1} />
                    <TestimonialsCard img={person2} />
                    <TestimonialsCard img={person3} />
                    <TestimonialsCard img={person4} />
                </div>
            </div>
        </div>

    )
}

export default Testimonials;