import { gql } from 'apollo-server';

export const apifiltersTypeDefs = gql`
  input ApiFiltersInput {
    _sort: String
    _order: ApiFiltersOrder
    _start: Int
    _limit: Int
  }

  enum ApiFiltersOrder {
    ASC
    DESC
  }
`;
