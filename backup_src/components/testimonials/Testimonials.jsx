import "./testimonials.scss";
import SkillsSection from '../SkillsSection';
export default function Testimonials() {
  
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="skillsContainer">
                <SkillsSection skill={'Python'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Django'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'React Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Flutter'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'ESP32 and Arduino'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Matlab'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Raspberry Pi'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'SolidWorks'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'PLC Programming'} progress={'25%'} width={'25%'} />
                
            </div>
    </div>
  );
}
