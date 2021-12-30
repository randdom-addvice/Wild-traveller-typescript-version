import { IUser } from "../../utils/authInterface";
import { IComment, ILocation } from "../../utils/LocationInterface";
import { ActionType } from "../action-types/auth.types";
import { CommentTypes, LocationTypes } from "../action-types/location.types";

//Locations
interface GetAllLocationAction {
  type: LocationTypes.FETCH_LOCATION;
  payload: ILocation;
}

interface GetSpecificLocationAction {
  type: LocationTypes.FETCH_SPECIFIC_LOCATION;
  payload: ILocation;
}

interface CreateLocationAction {
  type: LocationTypes.ADD_LOCATION;
  payload: ILocation;
}

interface UpdateLocationAction {
  type: LocationTypes.UPDATE_LOCATION;
  payload: ILocation;
}

interface DeleteLocationAction {
  type: LocationTypes.DELETE_LOCATION;
  payload: string;
}

interface SortLocationByNameAction {
  type: LocationTypes.SORT_LOCATION_BY_NAME;
}

interface SortLocationByDateCreatedAction {
  type: LocationTypes.SORT_LOCATION_BY_DATE_CREATED;
}

interface FetchLoading {
  type: LocationTypes.FETCH_LOADING;
}

// Commewnts
interface GetCommentAction {
  type: CommentTypes.GET_COMMENT;
  payload: IComment;
}

interface GetSpecificCommentAction {
  type: CommentTypes.FETCH_SPECIFIC_COMMENT;
  payload: IComment;
}

interface GetCommentAuthorAction {
  type: CommentTypes.GET_COMMENT_AUTHOR;
  payload: IComment;
}

interface AddCommentAction {
  type: CommentTypes.ADD_COMMENT;
  payload: IComment;
}

interface UpdateCommentAction {
  type: CommentTypes.UPDATE_COMMENT;
  payload: IComment;
}

interface DeleteCommentAction {
  type: CommentTypes.DELETE_COMMENT;
  payload: unknown;
}

interface ThrowErrorAction {
  type: LocationTypes.THROW_ERROR;
  payload: unknown;
}

export type LocationAction =
  | GetAllLocationAction
  | GetSpecificLocationAction
  | CreateLocationAction
  | UpdateLocationAction
  | DeleteLocationAction
  | SortLocationByDateCreatedAction
  | SortLocationByNameAction
  | AddCommentAction
  | GetCommentAction
  | UpdateCommentAction
  | DeleteCommentAction
  | GetCommentAuthorAction
  | GetSpecificCommentAction
  | ThrowErrorAction
  | FetchLoading;