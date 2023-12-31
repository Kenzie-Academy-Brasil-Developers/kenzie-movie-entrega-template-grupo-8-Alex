import { IReviewForm } from "../../components/ReviewComponents/ReviewForms/AddForm/ReviewFormSchema";

export interface IReviewProviderProps {
  children: React.ReactNode;
}

export interface IReview {
  id: string;
  movieId: string;
  userId: string;
  score: string;
  description: string;
}

// add    , movieId: string, userId: string

export interface IReviewContext {
  reviewList: IReview[];
  addReview: (formData: IReviewForm) => void;
  deleteReview: (reviewId: string) => void;
  editReview: (formData: IReviewForm, reviewId: string) => void;
  editingReview: IReview | null;
  setEditingReview: React.Dispatch<React.SetStateAction<IReview | null>>;
  setReviewList: React.Dispatch<React.SetStateAction<IReview[]>>;
  setIsOpenAdd: React.Dispatch<React.SetStateAction<boolean>>
  isOpenAdd: boolean
  isOpenEdit: boolean
  setIsOpenEdit: React.Dispatch<React.SetStateAction<boolean>>
}
