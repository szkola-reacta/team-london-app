import { useBreakpointValue } from "@chakra-ui/media-query";
import { useState } from "react";
import { matchPath, useHistory, useLocation } from "react-router";

export default function useSearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileSearch, setMobileSearch] = useState(false);
  const isMdMediaQuery = useBreakpointValue({
    md: true,
  });

  const searchRouteMatch = matchPath(useLocation().pathname, {
    path: "/search/:searchTerm",
  });

  const history = useHistory();

  const onSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const onHandleSearch = () => {
    if (!isMdMediaQuery) {
      // on small screen
      if (!showMobileSearch) {
        //then we can show it
        setMobileSearch(true);
        return;
      }

      if (!searchTerm.length || (searchRouteMatch && searchRouteMatch.params.searchTerm === searchTerm)) {
        //then we can hide it
        setMobileSearch(false);
        return;
      }
    }

    //default scenario
    if (searchTerm.length) {
      //submitting the form
      //so go to the search URL <Router> ?
      history.push(`/search/${searchTerm}`);
    }
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.length) {
      onHandleSearch();
    }
  };

  return {
      showMobileSearch,
      onSearchSubmit,
      searchTerm,
      onSearchTermChange,
      onHandleSearch
  }
};