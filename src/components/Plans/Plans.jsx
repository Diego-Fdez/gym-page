import './Plans.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
  return (
    <div className='plans-container' id='plans'>
      <div className='blur plans-blur-1'></div>
      <div className='blur plans-blur-2'></div>
      <div className='programs-header'>
        <span className='stroke-text'>READY TO STAR</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITH US</span>
      </div>
      {/* plans card */}
      <div className='plans'>
        {plansData.map((plan) => (
          <div className='plan' key={plan.name}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>&#36;{plan.price}</span>
            <div className='features'>
              {plan.features.map((feature, i) => (
                <div className='feature' key={i}>
                  <img src={whiteTick} alt='check blanco' />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -&gt;</span>
            </div>
            <button className='btn'>Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
