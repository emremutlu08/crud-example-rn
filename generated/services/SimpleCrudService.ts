/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteUserResponseModel } from '../models/DeleteUserResponseModel';
import type { UserModel } from '../models/UserModel';
import type { UserResponseModel } from '../models/UserResponseModel';
import type { UserUpdateModel } from '../models/UserUpdateModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SimpleCrudService {

    /**
     * List Users
     * @returns UserResponseModel Successful Response
     * @throws ApiError
     */
    public static listUsersUsersGet(): CancelablePromise<Array<UserResponseModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
        });
    }

    /**
     * Create User
     * @param requestBody 
     * @returns UserResponseModel Successful Response
     * @throws ApiError
     */
    public static createUserUsersPost(
requestBody: UserModel,
): CancelablePromise<UserResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get User
     * @param userKey 
     * @returns UserResponseModel Successful Response
     * @throws ApiError
     */
    public static getUserUsersUserKeyGet(
userKey: string,
): CancelablePromise<UserResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user_key}',
            path: {
                'user_key': userKey,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete User
     * @param userKey 
     * @returns DeleteUserResponseModel Successful Response
     * @throws ApiError
     */
    public static deleteUserUsersUserKeyDelete(
userKey: string,
): CancelablePromise<DeleteUserResponseModel> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{user_key}',
            path: {
                'user_key': userKey,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update User
     * @param userKey 
     * @param requestBody 
     * @returns UserResponseModel Successful Response
     * @throws ApiError
     */
    public static updateUserUsersUserKeyPatch(
userKey: string,
requestBody: UserUpdateModel,
): CancelablePromise<UserResponseModel> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/{user_key}',
            path: {
                'user_key': userKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
