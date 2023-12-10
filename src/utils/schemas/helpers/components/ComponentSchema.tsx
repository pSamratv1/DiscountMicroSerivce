/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ButtonNameSchema,
  ChildrenSchema,
  CssSchema,
  ErrorMsgSchema,
  FlagSchema,
  HandleActionSchema,
  OptionSchema,
  OtherChildrenSchema,
  RefSchema,
  SrcSchema,
  TitleSchema,
  IconSchema,
  HrefSchema,
  LabelSchema,
  ColorSchema,
} from "../../GlobalSchema";

// buttons
export interface ButtonSchema
  extends TitleSchema,
    HandleActionSchema,
    CssSchema,
    HrefSchema,
    FlagSchema,
    IconSchema {}

//  disconut cards
export interface DiscountCardSchema
  extends ChildrenSchema,
    CssSchema,
    TitleSchema,
    IconSchema,
    LabelSchema,
    ColorSchema {}

// cards
export interface CardSchema
  extends ChildrenSchema,
    HandleActionSchema,
    CssSchema,
    FlagSchema,
    RefSchema {}

// images
export interface CustomImageProps extends SrcSchema, CssSchema {
  alt: string;
}

// forms
export type FormSchema = {
  form: {
    register: any;
    errors: any;
    reset?: any;
    control?: any;
    handleSubmit?: any;
    onSubmit?: any;
  };
};

export type FormActionsSchema = {
  actions?: {
    handleClick: any;
    handleKeyUp: any;
    handleKeyDown: any;
    handleOnChange: any;
  };
};

export type CommonInputSchema = {
  common: {
    input: string;
    label?: string;
    defaultValue?: any;
    placeholder?: string;
    showForgotPassword?: boolean;
    showImportant?: boolean;
    icon?: any;
    restCommon?: any;
    handleOnChange?: any;
  };
};

export interface InputSchema
  extends CssSchema,
    ErrorMsgSchema,
    FormSchema,
    FormActionsSchema,
    CommonInputSchema {}

export interface SelectInputSchema extends InputSchema {
  options: OptionSchema[];
}

export interface AuthFormContainerSchema
  extends ChildrenSchema,
    OtherChildrenSchema,
    HandleActionSchema,
    TitleSchema,
    SrcSchema,
    ButtonNameSchema,
    FlagSchema {}
