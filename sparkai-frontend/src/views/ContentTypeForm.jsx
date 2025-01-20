/* eslint-disable no-unused-vars */
import React from "react";
import Selection from "./components/form/Selection";
import Text from "./components/form/Text";
import SubmitForm from "./components/form/SubmitForm";
import { FormProvider } from "../contexts/form";

function ContentTypeForm() {
  return (
    <FormProvider>
      <div>
        <Selection
          title="Which platform do you mainly use"
          att="platform"
          options={["YouTube", "Instagram", "TikTok", "Not Specific"]}
        />
        <Selection
          title="Select content video format"
          att="format"
          options={["Long", "Short", "Not Specific"]}
        />
        <Text title="Enter avg. video duration (mention unit)" att="duration" />
        <Text
          title="Enter genres your content falls under (separated by comma)"
          att="genre"
        />
        {/* <div className="text-2xl">Target Audience</div> */}
        <Text title="Enter target geography(s)" att="geography" />
        <Selection
          title="Select target age group"
          att="agegroup"
          options={[
            "Kids (0-12)",
            "Adolescents (13-17)",
            "Young Adults (18-24)",
            "Early Career (25-34)",
            "Mid-Career (35-44)",
            "Experienced Professional (45-54)",
            "Pre-Retirement (55-64)",
            "Retired/Senior Citizen (65+)",
            "Not Specific",
          ]}
        />
        <Selection
          title="Select target gender"
          att="gender"
          options={["Male", "Female", "Not Specific"]}
        />
        <Text title="Enter content language" att="language" />
        <Text
          title="Enter any description of content not mentioned above"
          att="description"
        />
        <SubmitForm />
      </div>
    </FormProvider>
  );
}

export default ContentTypeForm;
