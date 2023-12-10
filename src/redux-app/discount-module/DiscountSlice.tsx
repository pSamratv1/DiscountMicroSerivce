/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialServiceData, DiscountSliceSchema } from "./discount";
import { getReduxErrorMsg } from "utils/methods/reduxMethods";
import {
  CreateDiscountService,
  ViewCategoryService,
  EditDiscountService,
  DeleteDiscountService,
} from "./DiscountService";

export const initialState: DiscountSliceSchema = {
  // Platform
  platform: {
    _add_DiscountForm: {
      input: {
        discount_card_name: "",
        discount_date: {
          start_date: "",
          end_date: "",
        },
        discount_time: {
          start_time: "",
          end_time: "",
        },
        discount_type: {
          isFlag: false,
          label: "PER",
          value: "",
        },
        product_type: {
          labels: [
            { label: "Cold Drinks", value: "colddrinks" },
            { label: "Food", value: "food" },
            { label: "Icecream", value: "icecream" },
          ],
          values: [
            { label: "Pepsi", value: "pepsi" },
            { label: "Fanta", value: "fanta" },
            { label: "Sprite", value: "sprite" },
            { label: "Coke", value: "coke" },
          ],
          selectedLabel: "",
          selectedProduct: "",
        },
      },
      details: [],
      tags: [],
    },
    _edit_DiscountForm: {
      id: "",
      input: {
        discount_card_name: "",
        discount_date: {
          start_date: "",
          end_date: "",
        },
        discount_time: {
          start_time: "",
          end_time: "",
        },
        discount_type: {
          isFlag: false,
          label: "PER",
          value: "",
        },
        product_type: {
          labels: [
            { label: "Cold Drinks", value: "colddrinks" },
            { label: "Food", value: "food" },
            { label: "Icecream", value: "icecream" },
          ],
          values: [
            { label: "Pepsi", value: "pepsi" },
            { label: "Fanta", value: "fanta" },
            { label: "Sprite", value: "sprite" },
            { label: "Coke", value: "coke" },
          ],
          selectedLabel: "",
          selectedProduct: "",
        },
      },
      details: [],
      tags: [],
    },
    _delete_DiscountForm: {
      id: "",
      input: {
        discount_card_name: "",
        discount_date: {
          start_date: "",
          end_date: "",
        },
        discount_time: {
          start_time: "",
          end_time: "",
        },
        discount_type: {
          isFlag: false,
          label: "PER",
          value: "",
        },
        product_type: {
          labels: [
            { label: "Cold Drinks", value: "colddrinks" },
            { label: "Food", value: "food" },
            { label: "Icecream", value: "icecream" },
          ],
          values: [
            { label: "Pepsi", value: "pepsi" },
            { label: "Fanta", value: "fanta" },
            { label: "Sprite", value: "sprite" },
            { label: "Coke", value: "coke" },
          ],
          selectedLabel: "",
          selectedProduct: "",
        },
      },
      details: [],
      tags: [],
    },
  },
  // Organization CRUD
  discount: InitialServiceData,
};

// // Add Employee
// export const AddOrganizationThunk = createAsyncThunk(
//   "org-module/AddOrganizationThunk",
//   async (formData: any, thunkAPI) => {
//     try {
//       return await AddOrganizationService(formData);
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(getReduxErrorMsg(error));
//     }
//   }
// );

// View all the data for the table
export const ViewCategoryThunk = createAsyncThunk(
  "discount-module/ViewCategoryThunk",
  async (_, thunkAPI) => {
    try {
      return await ViewCategoryService();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(getReduxErrorMsg(error));
    }
  }
);

export const CreateDiscountThunk = createAsyncThunk(
  "discount-module/CreateDiscountThunk",
  async (formData: any, thunkAPI) => {
    try {
      return await CreateDiscountService({ formData });
    } catch (error: any) {
      return thunkAPI.rejectWithValue(getReduxErrorMsg(error));
    }
  }
);
export const EditDiscountThunk = createAsyncThunk(
  "discount-module/EditDiscountThunk",
  async ({ formData, id }: any, thunkAPI) => {
    try {
      const response = await EditDiscountService({ formData, id });
      // Assuming your service returns some data, adjust as needed
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(getReduxErrorMsg(error));
    }
  }
);
export const DeleteDiscountThunk = createAsyncThunk(
  "discount-module/DiscountDiscountThunk",
  async (id: any, thunkAPI) => {
    try {
      const response = await DeleteDiscountService(id);
      // Assuming your service returns some data, adjust as needed
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(getReduxErrorMsg(error));
    }
  }
);

export const DiscountSlice = createSlice({
  name: "discount_slice",
  initialState,
  reducers: {
    setDiscountdata: (state, action) => {
      state.discount.view.response.details = action.payload;
    },
    setEditDataId: (state, action) => {
      state.platform._edit_DiscountForm.id = action.payload;
    },
    setDeleteDataId: (state, action) => {
      state.platform._delete_DiscountForm.id = action.payload;
    },
    // Platform

    // Add Discount Form

    // setPlatform: (state, action) => {
    //   state.platform = action.payload;
    // },
    setAddDiscountName: (state, action) => {
      state.platform._add_DiscountForm.input.discount_card_name =
        action.payload;
    },
    setAddDiscountStartDate: (state, action) => {
      state.platform._add_DiscountForm.input.discount_date.start_date =
        action.payload;
    },
    setAddDiscountEndDate: (state, action) => {
      state.platform._add_DiscountForm.input.discount_date.end_date =
        action.payload;
    },
    setAddDiscountStartTime: (state, action) => {
      state.platform._add_DiscountForm.input.discount_time.start_time =
        action.payload;
    },
    setAddDiscountEndTime: (state, action) => {
      state.platform._add_DiscountForm.input.discount_time.end_time =
        action.payload;
    },
    setAddDiscountType: (state, action) => {
      const flag = action.payload;

      if (flag === true) {
        state.platform._add_DiscountForm.input.discount_type.isFlag = flag;
        state.platform._add_DiscountForm.input.discount_type.label = "FXD";
      } else {
        state.platform._add_DiscountForm.input.discount_type.isFlag = flag;
        state.platform._add_DiscountForm.input.discount_type.label = "PER";
      }
    },
    setEditDiscountType: (state, action) => {
      const flag = action.payload;

      if (flag === true) {
        state.platform._edit_DiscountForm.input.discount_type.isFlag = flag;
        state.platform._edit_DiscountForm.input.discount_type.label = "FXD";
      } else {
        state.platform._edit_DiscountForm.input.discount_type.isFlag = flag;
        state.platform._edit_DiscountForm.input.discount_type.label = "PER";
      }
    },
    setAddDiscountValue: (state, action) => {
      const value = action.payload;
      state.platform._add_DiscountForm.input.discount_type.value = value;
    },
    setEditDiscountValue: (state, action) => {
      const value = action.payload;
      state.platform._edit_DiscountForm.input.discount_type.value = value;
    },
    setAddProductType: (state, action) => {
      state.platform._add_DiscountForm.input.product_type.selectedLabel =
        action.payload;
    },
    setAddProductName: (state, action) => {
      state.platform._add_DiscountForm.input.product_type.selectedProduct =
        action.payload;
      state.platform._add_DiscountForm.tags.push(action.payload);
    },
    setAddProductList: (state, action) => {
      state.platform._add_DiscountForm.input.product_type.values =
        action.payload;
    },
    getDiscountdata: (state, action) => {
      const data = state.discount.view.response.details;
      data.map((items: any) => {
        if (items.sn === action.payload) {
          return items;
        }
      });
    },
    // resetPlatform: (state) => {
    //   state.platform = {
    //     discount_card_name: "",
    //     discount_type: {
    //       label: "percentage",
    //       value: "",
    //     },
    //     product_type: {
    //       labels: [],
    //       values: [],
    //       selectedLabel: "",
    //     },
    //   };
    // },
    // Discount
    setDiscountAddForm: (state, action) => {
      state.discount.add.isFlag = action.payload;
    },
    setDiscountDeleteForm: (state, action) => {
      state.discount.delete.isFlag = action.payload;
      console.log(action.payload, "id for delete");
    },
    setDiscountEditForm: (state, action) => {
      state.discount.edit.isFlag = action.payload;
    },
    setDiscountViewForm: () => {
      // state.role.view.activeTab = action.payload;
    },

    // DiscountData
    setAddDiscountData: (state, action) => {
      const newItem = action.payload; // Copy the structure of platform
      state.platform._add_DiscountForm.details.push(newItem);
    },
  },

  extraReducers: (builder) => {
    // View all the data for the table
    builder
      .addCase(ViewCategoryThunk.pending, (state) => {
        state.discount.view.response.isLoading = true;
      })
      .addCase(ViewCategoryThunk.fulfilled, (state, action) => {
        state.discount.view.response.details = action.payload;
        state.discount.view.response.isLoading = false;
        state.discount.view.response.isSuccess = true;
      })
      .addCase(ViewCategoryThunk.rejected, (state) => {
        state.discount.view.response.isLoading = false;
        state.discount.view.response.isSuccess = false;
        state.discount.view.response.details = null;
      })
      .addCase(CreateDiscountThunk.pending, (state) => {
        state.discount.add.response.isLoading = true;
      })
      .addCase(CreateDiscountThunk.fulfilled, (state, action) => {
        state.discount.add.response.details = action.payload;
        state.discount.add.response.isLoading = false;
        state.discount.add.response.isSuccess = true;
      })
      .addCase(CreateDiscountThunk.rejected, (state) => {
        state.discount.add.response.isLoading = false;
        state.discount.add.response.isSuccess = false;
        state.discount.add.response.details = null;
      })
      .addCase(EditDiscountThunk.pending, (state) => {
        state.discount.edit.response.isLoading = true;
      })
      .addCase(EditDiscountThunk.fulfilled, (state, action) => {
        state.discount.edit.response.details = action.payload;
        state.discount.edit.response.isLoading = false;
        state.discount.edit.response.isSuccess = true;
      })
      .addCase(EditDiscountThunk.rejected, (state) => {
        state.discount.edit.response.isLoading = false;
        state.discount.edit.response.isSuccess = false;
        state.discount.edit.response.details = null;
      })
      .addCase(DeleteDiscountThunk.pending, (state) => {
        state.discount.delete.response.isLoading = true;
      })
      .addCase(DeleteDiscountThunk.fulfilled, (state, action) => {
        state.discount.delete.response.details = action.payload;
        state.discount.delete.response.isLoading = false;
        state.discount.delete.response.isSuccess = true;
      })
      .addCase(DeleteDiscountThunk.rejected, (state) => {
        state.discount.delete.response.isLoading = false;
        state.discount.delete.response.isSuccess = false;
        state.discount.delete.response.details = null;
      });
  },
});

export const {
  // Platform
  // Add Discount Form
  setAddDiscountType,
  setAddDiscountStartDate,
  setAddDiscountEndDate,
  setAddDiscountValue,
  setAddProductType,
  setAddProductName,
  setAddDiscountName,
  setAddProductList,
  setAddDiscountStartTime,
  setAddDiscountEndTime,
  setDiscountdata,
  setEditDataId,
  setEditDiscountType,
  setDeleteDataId,
  // Discount Data
  setAddDiscountData,
  // Discount
  setDiscountAddForm,
  setDiscountDeleteForm,
  setDiscountEditForm,
  setDiscountViewForm,
} = DiscountSlice.actions;
export default DiscountSlice.reducer;
