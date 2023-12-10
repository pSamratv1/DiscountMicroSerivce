/* eslint-disable @typescript-eslint/no-explicit-any */

// Types
export type APiType = { isFlag?: boolean; response: any };
export type ServiceType = {
  add: APiType;
  delete: APiType;
  edit: APiType;
  view: APiType;
};
export type DiscountFormSchema = {
  discount_card_name: string;
  discount_date: {
    start_date: string;
    end_date: string;
  };
  discount_time: {
    start_time: string;
    end_time: string;
  };

  discount_type: {
    isFlag: boolean;
    label: string | null;
    value: string | number;
  };

  product_type: {
    labels: object[];
    values: object[];
    selectedLabel: string;
    selectedProduct: string;
  };
};

export type DiscountPlatformSchema = {
  id?: string | number | null;
  input: DiscountFormSchema;
  details: object[];
  tags: string[];
};

export type DiscountPlatform = {
  _add_DiscountForm: DiscountPlatformSchema;
  _edit_DiscountForm: DiscountPlatformSchema;
  _delete_DiscountForm: DiscountPlatformSchema;
};
export type DiscountSliceSchema = {
  platform: DiscountPlatform;
  discount: ServiceType;
};

// Variables
export const InitialApiData = {
    isFlag: false,
    response: {
      details: [],
      error: "",
      isLoading: false,
      isSuccess: false,
      toastMsg: "",
    },
  },
  InitialServiceData = {
    add: InitialApiData,
    delete: InitialApiData,
    edit: InitialApiData,
    view: InitialApiData,
  };
