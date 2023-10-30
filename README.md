# Yeongflix

## ❤️ 프로젝트 내용

- TMDB API를 사용하여 영화 정보를 조회 및 검색할 수 있는 웹 프로젝트

## 🌱 배포 영상

- 배포 링크 : [Yeongflix](https://yeongflix.vercel.app/)

<img src="https://github.com/YeongseoYoon/yeongflix/assets/86523545/1605f745-8074-45e1-808c-38386af6786a"/>

## 🏔️ 개발 환경

### Development Environment

- OS : Windows 11
- CPU : Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz 1.80 GHz
- Runtime : Node v18.13.0

### Library & Language

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/tanstack/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white"/>

### Styling

<img src="https://img.shields.io/badge/styled component-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

## 🚀 실행 방법

```
$ git clone https://github.com/YeongseoYoon/yeongflix.git
$ npm install
$ npm run dev
```

**🚨 로컬에서 클론해 구동 시 .env 파일 설정 필요**

```
VITE_API_KEY = //TMDB에서 발급 받은 API 키
```

## 📁 디렉토리 구조

```
📦src
 ┣ 📂apis
 ┃ ┣ 📜config.ts
 ┃ ┣ 📜httpClient.ts
 ┃ ┗ 📜index.ts
 ┣ 📂components
 ┃ ┣ 📂DarkMode
 ┃ ┃ ┣ 📜Button.styled.ts
 ┃ ┃ ┗ 📜Button.tsx
 ┃ ┣ 📂EmptyResult
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styled.ts
 ┃ ┣ 📂ErrorBoundary
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styled.ts
 ┃ ┣ 📂Movie
 ┃ ┃ ┣ 📂DetailModal
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┗ 📂List
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┗ 📜index.ts
 ┣ 📂constants
 ┃ ┣ 📜constant.ts
 ┃ ┗ 📜index.ts
 ┣ 📂context
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜ThemeContext.tsx
 ┣ 📂hooks
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜useMovieDetailQuery.ts
 ┃ ┣ 📜useMoviesQuery.ts
 ┃ ┣ 📜useScrollToTop.ts
 ┃ ┗ 📜useSearchedMoviesQuery.ts
 ┣ 📂pages
 ┃ ┣ 📂home
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂nowplaying
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂search
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂upcoming
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂services
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜movie.service.ts
 ┣ 📂styles
 ┃ ┣ 📜reset.css
 ┃ ┣ 📜styled.d.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂types
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜types.ts
 ┣ 📂utils
 ┃ ┣ 📜convertToDollarFormat.ts
 ┃ ┣ 📜formatRating.ts
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜makeImagePath.ts
 ┃ ┗ 📜queryClient.ts
 ┣ 📜env.d.ts
 ┣ 📜GlobalStyle.tsx
 ┣ 📜main.tsx
 ┣ 📜Root.tsx
 ┗ 📜Router.tsx
```

# 🎈 구현 기능 및 구현 방식

## 1. API 요청해 영화 리스트 불러오기

- service와 httpClient를 분리해 api 호출과 비즈니스 로직을 분리했습니다. 추상화 된 httpClient를 상속받은 service를 구현해 유지보수가 용이하도록 리팩토링했습니다.
  - 코드의 횡단 관심사를 분리하여 로직을 더욱 깔끔하게 만들고자 했습니다.. 리팩토링을 하면서 httpClient가 분리되어 있지 않았을 경우, API 요청 사양이 변경된다면 유지보수가 어려워진다는 것을 깨닫게 되었습니다.
  - 또한, 이전에는 API 요청과 비즈니스 로직이 강하게 결합되어 있었기 때문에, API 호출 오류의 경우 모든 API 요청 함수에서 중복된 코드로 처리되고 있었습니다. 그러나 httpClient를 분리함으로써, 추후에 에러 처리 방법을 변경해야 할 경우 중복 작업을 피할 수 있을 것으로 예상했습니다.

```
//httpClient.ts
import { API_BASE_URL } from "./config";

interface HttpHeaders {
  [headerName: string]: string;
}

interface RequestOptions {
  method: string;
  body: string;
  headers: HttpHeaders;
}

export class HttpClient {
  constructor(private baseURL: string) {}

  public get = async <T>(
    endPoint: string,
    options?: RequestOptions
  ): Promise<T> => {
    const response = await fetch(this.baseURL + endPoint, {
      method: "get",
      ...options,
    });

    if (!response.ok)
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });

    return (await response.json()) as T;
  };
}

export const httpclient = new HttpClient(API_BASE_URL);

```

```ts
//movie.service.ts
import { HttpClient, httpclient } from "@/apis";
import { IAPIResponse, IMovieDetail } from "@/types";

const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export class MovieService {
  constructor(private httpClient: HttpClient) {}

  public async fetchMovies(
    type: string,
    page: number = 1
  ): Promise<IAPIResponse> {
    return await this.httpClient.get(
      `/movie/${type}?language=en-US&include_adult=false&page=${page}&api_key=${VITE_API_KEY}`
    );
  }

  public async fetchMovie(movieId: string): Promise<IMovieDetail> {
    return await this.httpClient.get(
      `/movie/${movieId}?api_key=${VITE_API_KEY}`
    );
  }

  public async fetchSearchedMovies(
    keyword: string,
    page: number = 1
  ): Promise<IAPIResponse> {
    return await this.httpClient.get(
      `/search/movie?query=${keyword}&language=en-US&include_adult=false&page=${page}&api_key=${VITE_API_KEY}`
    );
  }
}

export const movieService = new MovieService(httpclient);
```

- react-router-dom의 `loader`와 react query를 결합해 사용함으로 prefetching을 통해 사용자 경험을 개선하고, 데이터의 특성을 고려해 staleTime을 30분으로 두어 네트워크 요청 횟수를 줄였습니다.

## 2. 검색 결과 없음

- 검색 결과가 없는 경우, 검색 결과가 없다는 창을 보여줍니다.

- `data && data?.pages[0]?.results?.length > 0 ` 와 같이 data가 존재하고, data에 들어온 results가 존재하는 지에 대해 검증이 되었을 경우에 따라 EmptyResult와 MovieList를 분기처리해 렌더링하도록 했지만 데이터가 있음에도 한 번 깜빡하면서 EmptyResults를 보여주고나서 MovieList가 보여지는 상황이 발생했습니다.

  - `isFetched`를 이용해, 데이터가 페칭되었는지도 확인 후 렌더링하도록 구현했습니다.

```ts
//Search.tsx
import { useLocation } from "react-router";
import { EmptyResult, MovieList } from "@/components";
import { useSearchedMoviesQuery } from "@/hooks";

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword") || "";

  const { ref, data, isFetched } = useSearchedMoviesQuery(keyword);

  return (
    <>
      {isFetched ? (
        data && data?.pages[0]?.results?.length > 0 ? (
          <MovieList data={data} refProp={ref} />
        ) : (
          <EmptyResult keyword={keyword} />
        )
      ) : null}
    </>
  );
};

export default Search;
```

## 3. 다크모드

- styled-components와 useContext를 이용해 다크모드를 구현했습니다.

```ts
//DarkModeButton.tsx
import {
  faMoon as darkModeIcon,
  faSun as lightModeIcon,
} from "@fortawesome/free-solid-svg-icons";

import { useThemeContext } from "@/context";

import { ButtonWrapper, ButtonIcon } from "./Button.styled";

function DarkModeButton() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <ButtonWrapper onClick={toggleTheme}>
      <ButtonIcon icon={theme === "DARK" ? lightModeIcon : darkModeIcon} />
    </ButtonWrapper>
  );
}

export default DarkModeButton;
```

```ts
//ThemeContext.tsx
interface IThemeContext {
  theme: THEME_MODE;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: "LIGHT",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState<THEME_MODE>("LIGHT");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "LIGHT" ? "DARK" : "LIGHT"));
  };

  const themeObject = theme === "LIGHT" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): IThemeContext => useContext(ThemeContext);
```

- Dark 모드와 Light 모드의 타입을 `type THEME_MODE = "LIGHT" | "DARK"`의 리터럴 타입으로 좁혀지도록 지정했습니다.

```ts
//constants.ts
export const THEMES = ["LIGHT", "DARK"] as const;
export type THEME_MODE = (typeof THEMES)[number];
```

<img src="https://github.com/wanted-internship-12-9/boiler-plate/assets/86523545/e448d2d6-672b-44aa-bbeb-a5971afaf338"/>

## 4. 이미지 없음

- https://ko.vitejs.dev/guide/assets.html 를 기반으로 이미지가 없을 시 띄워줄 정적 이미지를 위치시켰습니다.

- img태그의 onError이벤트(이미지가 없을 시 발생) 발생 시 handleErrorImage를 호출해 `event.currentTarget.onerror = null;`로 설정해 이미지가 다시 로드될 때 오류가 계속해서 반복적으로 발생하는 것을 방지했습니다.

```ts
//components/Movie/List.tsx
const errorImgUrl = new URL("/image/errorImg.png", import.meta.url).href;

const handleErrorImage = (event: SyntheticEvent<HTMLImageElement, Event>) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = errorImgUrl;
};

<CardImg
  alt={movie.title}
  src={makeImagePath(movie.poster_path, "w500")}
  onError={handleErrorImage}
/>;
```

<img src="https://github.com/wanted-internship-12-9/boiler-plate/assets/86523545/bdea9079-eb68-4f2e-b912-ffe1ac2128c2"/>

## 5. 기타 사항

- 모달 뒤 스크롤을 막아 사용자의 시선이 모달에만 집중되도록 했습니다.

```ts
useEffect(() => {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = `${scrollbarWidth}px`;

  return () => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  };
}, []);
```

- 통일된 UI를 유지하기 위해 글자 수를 제한하고 말 줄임표를 사용했습니다.

```ts
export const Title = styled(motion.h3)`
  //중략
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
```

<img src="https://github.com/wanted-internship-12-9/boiler-plate/assets/86523545/7b5b2e61-6d9d-415b-a300-86404776071d"/>
