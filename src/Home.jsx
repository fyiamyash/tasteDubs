import './Home.css';
import TdAppbar from './TdAppbar';
function Home()
{
    return<>
    <TdAppbar />
    <section class="one">
        <div className="container">
            <div className="hero">
                <h2>Abs are cool. <span>But Have you ever tried our burgers </span></h2>
                <p>
                every bite is a delightful adventure! <br/>
                Sink your teeth into our mouthwatering burgers crafted with love and passion.<br/>
                From classic beef patties to veggie delights, we've got something to satisfy every craving.<br />
                But we're not just about burgers; we're about creating unforgettable experiences.
                </p>
            </div>
        </div>
    </section>

    <section class="two">
        <div className="container">
            <div className="hero">
                <h2>Delicacy at it's best<span>Bite into happiness at our burger cafe</span></h2>
                <p>
                Started in 2021, We at Taste Dubs don't just grill Burgers, but grill true <br />
                delicacy to serve you. Our believe is to provide best of quality to our customers.<br />
                Join us and enjoy our succulent Burgers.
                </p>
            </div>
        </div>
    </section>

    <section class="three">
        <h1>TASTE DUBS!</h1>
    </section>
    </>
}

export default Home;