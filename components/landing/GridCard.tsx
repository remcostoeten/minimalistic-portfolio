import Icon from "../icons/icons";
import { personalData } from "../../lib/data/personal-data";

export default function GridCard() {
  return (
    <div className="about-card">
      <div className="style-1">
        <div className="style-2">
          <div className="style-3">
            <div className="style-4">
              <div className="style-5">
                <div className="style-6">
                  <div className="style-7">
                    <Icon src="bitmoji" alt=" Remco Stoeten Bitmoji" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="style-9">
        <div className="style-10">
          <h1>{personalData.name}</h1>
        </div>
        <div className="style-12">
          <p className="style-13">{personalData.about.short}</p>
        </div>
      </div>
    </div>
  );
};
