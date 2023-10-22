import { personalData } from "../personal-data";

export default function GridCard() {
  return (
    <div className="style-0" name="Person Card">
      <div className="style-1">
        <div className="style-2">
          <div className="style-3">
            <div className="style-4">
              <div className="style-5">
                <div className="style-6">
                  <div className="style-7">
                    <img src="c.png" className="flex -translate-y-5 scale-[1.3] style-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="style-9">
        <div className="style-10">
          <h1 className="style-11">{personalData.name}</h1>
        </div>
        <div className="style-12">
          <h1 className="style-13">{personalData.about.short}</h1>
        </div>
      </div>
    </div>
  );
};
