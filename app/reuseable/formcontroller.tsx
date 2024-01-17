import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import dayjs from "dayjs";

export default function Formcontroller({
  control,
  rules,
  name,
  datePicker,
  typeField,
}: {
  rules: object;
  name: string;
  control: any;
  datePicker?: boolean;
  typeField?: boolean;
}) {
  return (
    <div>
      <Controller
        control={control}
        rules={rules}
        name={name}
        render={({
          field: { onChange, onBlur, value, ref },
          fieldState: { error },
        }) => (
          <>
            {!datePicker ? (
              <>
                <TextField
                  onChange={onChange} // send value to hook form
                  onBlur={onBlur} // notify when input is touched/blur
                  value={value ? value : ""}
                  error={!!error}
                  type={typeField ? "number" : ""}
                  label={name}
                  helperText={!!error && error?.message}
                />
              </>
            ) : (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Basic date picker"
                    value={value?dayjs(value):""}
                    onChange={(e: any) => {
                      console.log(dayjs(e), "e");

                      if (e) {
                        onChange(new Date(e)?.toLocaleString()?.split(",")[0]);
                      }
                    }}
                    // {new Date(value)?.toLocaleString()?.split(',')[0]}
                    slotProps={{
                      textField: {
                        error: !!error?.message,
                        helperText: !!error?.message ? error?.message : "",
                      },
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            )}
          </>
        )}
      />
    </div>
  );
}
