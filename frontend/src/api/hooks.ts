import * as Operations from './operations';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export type FavoritePokemonMutationFn = Apollo.MutationFunction<Operations.FavoritePokemonMutation, Operations.FavoritePokemonMutationVariables>;

/**
 * __useFavoritePokemonMutation__
 *
 * To run a mutation, you first call `useFavoritePokemonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFavoritePokemonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [favoritePokemonMutation, { data, loading, error }] = useFavoritePokemonMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFavoritePokemonMutation(baseOptions?: Apollo.MutationHookOptions<Operations.FavoritePokemonMutation, Operations.FavoritePokemonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Operations.FavoritePokemonMutation, Operations.FavoritePokemonMutationVariables>(Operations.FavoritePokemonDocument, options);
      }
export type FavoritePokemonMutationHookResult = ReturnType<typeof useFavoritePokemonMutation>;
export type FavoritePokemonMutationResult = Apollo.MutationResult<Operations.FavoritePokemonMutation>;
export type FavoritePokemonMutationOptions = Apollo.BaseMutationOptions<Operations.FavoritePokemonMutation, Operations.FavoritePokemonMutationVariables>;
export type UnFavoritePokemonMutationFn = Apollo.MutationFunction<Operations.UnFavoritePokemonMutation, Operations.UnFavoritePokemonMutationVariables>;

/**
 * __useUnFavoritePokemonMutation__
 *
 * To run a mutation, you first call `useUnFavoritePokemonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnFavoritePokemonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unFavoritePokemonMutation, { data, loading, error }] = useUnFavoritePokemonMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnFavoritePokemonMutation(baseOptions?: Apollo.MutationHookOptions<Operations.UnFavoritePokemonMutation, Operations.UnFavoritePokemonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Operations.UnFavoritePokemonMutation, Operations.UnFavoritePokemonMutationVariables>(Operations.UnFavoritePokemonDocument, options);
      }
export type UnFavoritePokemonMutationHookResult = ReturnType<typeof useUnFavoritePokemonMutation>;
export type UnFavoritePokemonMutationResult = Apollo.MutationResult<Operations.UnFavoritePokemonMutation>;
export type UnFavoritePokemonMutationOptions = Apollo.BaseMutationOptions<Operations.UnFavoritePokemonMutation, Operations.UnFavoritePokemonMutationVariables>;

/**
 * __useGetPokemonsListQuery__
 *
 * To run a query within a React component, call `useGetPokemonsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonsListQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useGetPokemonsListQuery(baseOptions: Apollo.QueryHookOptions<Operations.GetPokemonsListQuery, Operations.GetPokemonsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Operations.GetPokemonsListQuery, Operations.GetPokemonsListQueryVariables>(Operations.GetPokemonsListDocument, options);
      }
export function useGetPokemonsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Operations.GetPokemonsListQuery, Operations.GetPokemonsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Operations.GetPokemonsListQuery, Operations.GetPokemonsListQueryVariables>(Operations.GetPokemonsListDocument, options);
        }
export type GetPokemonsListQueryHookResult = ReturnType<typeof useGetPokemonsListQuery>;
export type GetPokemonsListLazyQueryHookResult = ReturnType<typeof useGetPokemonsListLazyQuery>;
export type GetPokemonsListQueryResult = Apollo.QueryResult<Operations.GetPokemonsListQuery, Operations.GetPokemonsListQueryVariables>;

/**
 * __useGetAllPokemonNamesQuery__
 *
 * To run a query within a React component, call `useGetAllPokemonNamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPokemonNamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPokemonNamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPokemonNamesQuery(baseOptions?: Apollo.QueryHookOptions<Operations.GetAllPokemonNamesQuery, Operations.GetAllPokemonNamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Operations.GetAllPokemonNamesQuery, Operations.GetAllPokemonNamesQueryVariables>(Operations.GetAllPokemonNamesDocument, options);
      }
export function useGetAllPokemonNamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Operations.GetAllPokemonNamesQuery, Operations.GetAllPokemonNamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Operations.GetAllPokemonNamesQuery, Operations.GetAllPokemonNamesQueryVariables>(Operations.GetAllPokemonNamesDocument, options);
        }
export type GetAllPokemonNamesQueryHookResult = ReturnType<typeof useGetAllPokemonNamesQuery>;
export type GetAllPokemonNamesLazyQueryHookResult = ReturnType<typeof useGetAllPokemonNamesLazyQuery>;
export type GetAllPokemonNamesQueryResult = Apollo.QueryResult<Operations.GetAllPokemonNamesQuery, Operations.GetAllPokemonNamesQueryVariables>;

/**
 * __useGetAllPokemonTypesQuery__
 *
 * To run a query within a React component, call `useGetAllPokemonTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPokemonTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPokemonTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPokemonTypesQuery(baseOptions?: Apollo.QueryHookOptions<Operations.GetAllPokemonTypesQuery, Operations.GetAllPokemonTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Operations.GetAllPokemonTypesQuery, Operations.GetAllPokemonTypesQueryVariables>(Operations.GetAllPokemonTypesDocument, options);
      }
export function useGetAllPokemonTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Operations.GetAllPokemonTypesQuery, Operations.GetAllPokemonTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Operations.GetAllPokemonTypesQuery, Operations.GetAllPokemonTypesQueryVariables>(Operations.GetAllPokemonTypesDocument, options);
        }
export type GetAllPokemonTypesQueryHookResult = ReturnType<typeof useGetAllPokemonTypesQuery>;
export type GetAllPokemonTypesLazyQueryHookResult = ReturnType<typeof useGetAllPokemonTypesLazyQuery>;
export type GetAllPokemonTypesQueryResult = Apollo.QueryResult<Operations.GetAllPokemonTypesQuery, Operations.GetAllPokemonTypesQueryVariables>;

/**
 * __useGetPokemonQuery__
 *
 * To run a query within a React component, call `useGetPokemonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetPokemonQuery(baseOptions: Apollo.QueryHookOptions<Operations.GetPokemonQuery, Operations.GetPokemonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Operations.GetPokemonQuery, Operations.GetPokemonQueryVariables>(Operations.GetPokemonDocument, options);
      }
export function useGetPokemonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Operations.GetPokemonQuery, Operations.GetPokemonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Operations.GetPokemonQuery, Operations.GetPokemonQueryVariables>(Operations.GetPokemonDocument, options);
        }
export type GetPokemonQueryHookResult = ReturnType<typeof useGetPokemonQuery>;
export type GetPokemonLazyQueryHookResult = ReturnType<typeof useGetPokemonLazyQuery>;
export type GetPokemonQueryResult = Apollo.QueryResult<Operations.GetPokemonQuery, Operations.GetPokemonQueryVariables>;