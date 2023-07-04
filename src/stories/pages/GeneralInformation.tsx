import React from "react"
import FormElementsInputRoundedBaseHelperText from "../../components/formControls/input/Input"
import FormElementsInputRoundedBaseBasic from "../../components/formControls/input/Another"

export const GeneralInformation = () => (
  <>
    {/*<!-- Component: Four columns even layout --> */}
    <section>
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-3">
            <FormElementsInputRoundedBaseHelperText label="Customer Legal Name" />
          </div>
          <div className="col-span-4 lg:col-span-3">
            <FormElementsInputRoundedBaseHelperText label="Customer DBA" />
          </div>
          <div className="col-span-4 lg:col-span-3">
            <FormElementsInputRoundedBaseHelperText label="Tax ID/Registration Number" />
          </div>
          <div className="col-span-4 lg:col-span-3">
            <FormElementsInputRoundedBaseBasic/>
          </div>
        </div>
      </div>
    </section>
    {/*<!-- End Four columns even layout --> */}
  </>
)