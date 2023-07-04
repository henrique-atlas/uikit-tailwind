//https://wind-ui.com/components/form-elements/input-groups/
import React, { useState } from "react"

export default function FormElementsInputRoundedBaseHelperText({label, placeholder = ''}:{label:string, placeholder?:string}) {
  const [state, setState] = useState({
    "id-b03": "",
  })

  const handleChange = evt => {
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value,
    })
  }

  return (
    <>
      {/*    <!-- Component: Rounded input with helper text --> */}
      <div className="relative my-6">
        <input
          id="id-b03"
          type="text"
          name="id-b03"
          placeholder={placeholder}
          value={state["id-b03"]}
          className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          onChange={handleChange}
        />
        <label
          htmlFor="id-b03"
          className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          {label}
        </label>
        <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
          <span>Text field with helper text</span>
          <span className="text-slate-500">1/10</span>
        </small>
      </div>
      {/*    <!-- End Rounded input with helper text --> */}
    </>
  )
}
