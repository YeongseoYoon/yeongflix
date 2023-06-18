import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  EmptyIcon,
  EmptyMessage,
  EmptyMessageContent,
  Keyword,
  Wrapper,
} from "./EmptyResults.styled";

interface IMovieListProps {
  keyword: string;
}

function EmptyResults({ keyword }: IMovieListProps) {
  return (
    <Wrapper>
      <Container>
        <EmptyIcon>
          <FontAwesomeIcon icon={faSearch} />
        </EmptyIcon>
        <EmptyMessage>
          <Keyword>{keyword}</Keyword>에 대한 검색 결과가 없어요!
        </EmptyMessage>
        <EmptyMessageContent>
          단어가 정확한지 확인하고 다른 검색어로 검색해주세요!
        </EmptyMessageContent>
      </Container>
    </Wrapper>
  );
}

export default EmptyResults;
