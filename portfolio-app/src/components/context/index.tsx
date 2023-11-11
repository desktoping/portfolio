import React from "react";

interface ResumeViewContextValue {
  show: boolean;
  toggleValue: () => void;
}

const initialValue: ResumeViewContextValue = {
  show: false,
  toggleValue: () => null,
};

const ResumeViewContext =
  React.createContext<ResumeViewContextValue>(initialValue);

export const ResumeViewContextProvider = ResumeViewContext.Provider;

export const ResumeViewContextConsumer = ResumeViewContext.Consumer;
