import React, { useState } from "react";

export default function MultiStepForm() {
  const totalSteps = 4;

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    jobTitle: "",
    jobType: "",
    location: "",
    experience: "",
  });

  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step === 1 && !formData.jobTitle) return alert("Enter job title");
    if (step === 2 && !formData.jobType) return alert("Select job type");
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-lg">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
          <div
            className="h-2 bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Step Content */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              What job are you looking for?
            </h2>
            <input
              type="text"
              placeholder="Enter job title"
              className="w-full border p-3 rounded-lg"
              value={formData.jobTitle}
              onChange={(e) =>
                setFormData({ ...formData, jobTitle: e.target.value })
              }
            />
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Select job type</h2>
            <div className="grid grid-cols-2 gap-3">
              {["Full-time", "Part-time", "Internship", "Freelance"].map(
                (type) => (
                  <button
                    key={type}
                    onClick={() => setFormData({ ...formData, jobType: type })}
                    className={`p-3 border rounded-lg transition ${
                      formData.jobType === type
                        ? "bg-blue-600 text-white"
                        : "bg-white"
                    }`}
                  >
                    {type}
                  </button>
                ),
              )}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Preferred Location</h2>
            <input
              type="text"
              placeholder="Enter location"
              className="w-full border p-3 rounded-lg"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Experience Level</h2>
            <select
              className="w-full border p-3 rounded-lg"
              value={formData.experience}
              onChange={(e) =>
                setFormData({ ...formData, experience: e.target.value })
              }
            >
              <option value="">Select experience</option>
              <option value="Fresher">Fresher</option>
              <option value="1-3 years">1-3 years</option>
              <option value="3+ years">3+ years</option>
            </select>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className="px-4 py-2 rounded-lg border disabled:opacity-50"
          >
            Back
          </button>

          {step < totalSteps ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={() => console.log(formData)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
