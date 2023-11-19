/**
 * GridCard component.
 *
 * TODO: Migrate CSS classes to Tailwind
 */

import Icon from "../icons/icons";
import { personalData } from "../../config/data/personal-data";
import ReactMarkdown from "react-markdown";

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
          <div className="style-12">
            <p className="style-13" dangerouslySetInnerHTML={{ __html: personalData.about.short }} />
          </div>
        </div>
      </div>
    </div>
  );
};
