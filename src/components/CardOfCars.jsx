import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import LockOpenIcon from "@mui/icons-material/LockOpen";

export default function CardOfCars() {
  return (
    <Card
      sx={{ maxWidth: 345, boxShadow: "1px 1px 3px gray, -1px -1px 3px gray" }}
    >
      <CardHeader
        action={
          <div className="flex items-center gap-1">
            <h1 className="text-[10px] font-[700]">Mockva</h1>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <rect width="27" height="27" rx="6" fill="#A2CC5E" />
                <path
                  d="M17.6 9L12.5 14.15L10.4 12.05L9 13.45L12.5 17L19 10.45L17.6 9Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        }
      />
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGBgaHBgaGhwcHB4eGhwcGhgaGRgaHh4cIS4lHB4rIRgZJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzYkJSs0NDQ0MTQ9NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAEIQAAIAAwUEBgcHAwMEAwAAAAECAAMRBAUSITFBUWFxBiIygZGhE0JSscHR8BQVYnKCouGSwtKTsvEHI0OzJDOD/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKhEAAgIBBAIBAgYDAAAAAAAAAAECEQMEEiExQVETImEUMnGBofEFI5H/2gAMAwEAAhEDEQA/AL5lofUXwEd6FNstf6RD1lrpDGljZrHh8m1jfskrbLX+kRE13yK5yk5gU90TKh2V8RHMTuPGHcl5Cyq91Wc/+IecRNctmIzl+BPzi2S24xxdtc4rdL2/+isFN0bsx0Vh+r5x0m4JSaF/EH4QVLuOPhCY21IP1yivkn7FaBzXRK3v4j5Qkq6ZSsDV/HKCBc0qBUbtYcCSNPKD5JewsBW+6FbOWxBOuIgiBU2y4NpJ27o1plqdg8PhDfsqk9gHuhrK/IrMHMLVyBNYJ3VZqmrI9PwkDLvEak2NPYHhCCyLXIARp8yqqBMdZ7LLplMmJ+dAR4qfhEBucOSZcyU3Akof3CkWEkc/ExPLqNIn5aKUjP2+6ZqCrocO8FWH7SYAW6WQMhG9mOx1CsvFcx3xXm2FH1lj9P8AEUs/tA+Tz1JWWmcIZZ2RuHuVNmIcCKxWe4q6Mo51BjRZosmjHvWsMYsY2CdH2GxW5EV8DFW1XQ9M0YAcIqOVXQUZpWy47Yll1pUmggm1hXQDyiu1lOlPCL3JhRArjafCFlzKVpHTJIA3HcNYdLk7qxLqgGvNO2Kloau2LjS2Ozwis0h61NOUXFpARS2oucSSniJ9Y4mkN8gSicRWsdJmCmucQTtKw1E2wbVQFxZhzzjlmE0B2bYp4tgpE8ug258YW0Cw7iuQPhE8lgBioPjA0z230hUdqEk5boHHgLD1mtQqCQCOMF0tS00XxjEyp50BNOEWBaYj4xp0etTkCqBjUs1NM6Djl5xFMXMkdaopkNvDZCpYT7Nf1Z+GnnESynU9kkaDMU7/AJR51DJbMGyIIrppkONN/OGlqg0plXrHbTcBs5xHNZxU0/SMz5RWS0GvWRl4n4CDmuhE7OagVGgFRu474V2YCpNRXhUjlWsLLta09ep3gfye6IA+dWJJ8B5/KBATljhqaUHDac6E90Ma0M2VAOGW2IltQU7/AK4xNNtCPSnV76k8YG2gEadTnt/4HvhiWo1rTLP6yhJ+Fetn+rb3D4xEbViArXLTOgHKH2ItJahXrLXfTXbSldI5rSp9U/xs0iqQT6pFdp+szErGg7OX1xrCoLJXmj2TXbppxhTaVWgwFjvFKD+IqO9aqKV2kZAU4w1Z2o27N0PawsJhhgqAa6HnspnEbqKmhpvzOsDfTmlDXbXZXwh9ms7TCFXEWJyVRmafWsNQYbgg8k551GypIyrTKIRLOwV00qTyyEaK7+jOEBrQ5IGYRT5Mw9y7tYLTrWFGFECgZAAR0w00u5OhOSMbLuyY2eHB+diK9yhmHeIn+6qdqcq8BKmOPE4PdBO1T5h4d8A7wkznUjFkdzD4xusONdk7iwbJIHanv+mTT3kxypZVzFotC8kA9yRkLdLdDRmYHugeZ7A1qTzjRYoeEPcb9zZCM7Q5/PLQ+9BFObZbC2loUH8qjyDCMLaLzf2jFGZeTnj3RXxr0Fs3UzoxZnOJbQhO/wBGfg/whD0Vb1J0luZdT/tMYGXNdj1UYn8INfKLlkvCcDQTHBHqtn3daE8cXwFmmtnRi0rn6MsNpQq3lXF5QENhJYoKhh6pBD96mhjWdFb6eYSjHrLTMaGvuMaS+LuNpl9aXLZQSFdyQ4pkWVlUkZ6DlnnQS8SXQ7PKZtiYdpSO6K72Zd2caL71tNlcy3CTk1VXOI4akdV2AOyndpGiuy1WO1Aj0QVxTEh6rCu0e0MtREOMkNUzzg2OuZpyiNrHsGQ5R6pM6OWZtKr9d8U5nQ1D2HH13/CFuY9p5uLJwrzhWs31rG4n9DnFaNrsqR8IHzejM9dFDDmCfKDcKjLizV+soimWV4P2i6pqdpGHdFf0DVoQaQ1Ie0CCzER32Ztxg0LOFhSPqkPexbTWpaG9VQO6vvrSJfSORmaeA8opS2pnQ+XyjmmcSO/5Rw7QLCsRnjp3j5Qj299jnu/4in1dSfrxh6TEByAPj84NqAspPG3EYjmWrcad8MaYNmHwiBph3L4QKKAtK425xYk21EzANd+KnkBA1XJ3DwELhrt8IHFAXp1sDmpJY/mNBEwn7uqd5JJ7qQMWz55Ek8onFmmj1XP6GpFfE30hWTziD2mqfrfEUtqbct1AIVA9KlP2t8orzJw2inACnvhODXDQrLzKzZKuI7lqSfCEezuoq6U7jruO6JbsvUhJkpAVLjEG9YlRmtd1M+4745pgbAmGeJCCkwpKc4m9YhsOE86mmeUd+PRxeH5G+fCMnkl8m1Lj2WLsuqZaWwqAqr23p1V+bcK+EbWyWSXZ1wyxUntMe03M7BwGUDrs6RWRpSrZ3lqoyChhlvrnmTrU5nbCWm8U2MPGCGNQXHZcmXLTaNpNfdAy0W2BdrvMfQMBLVfIFdfAw2pMkNTrcTpAu2XiEQsTXdTfugDab+OwQKtNvaZ2tFzpXKBQfkdEtst7O+Z114cuAEDJ9sO+GTZpocIPEgV7uUVTIc+qRzFPfGtDGTbSTFsX0uHC8pWyAqCVOW7LKKcyxtvA8flEfoWHZVeZoSf6hQQwJfvCjVTGvfmO8UiayF2YtmSTUnaamtYluTqzVLpiGexfEVFCaVoPlGgtdks6BmQ4Xw4gBUqQefZOeQ+cS3zQ6CXQdOu77FVf7j8I9XsigS0QioCKPIR5d0Ll/wDZnNvOEf0gDzePUJSkZQMTMB/1MukKiTkpTGykAe0K+9T4xhrDPcGqmjrmvHevI++kerf9RR/8F9vXSnPGI80W4JuRxy0bIhXchhzABoeBzioQlJ/Srf2JlOMV9Tr9TWSL1xBJiOWR1qVbVHGTKTqRpnx4QbW0AqGqKHbs5cIydmuSaiMVAclwwVGDUxA4yKGtKgZUgK/SB5RfMlS2ELQZU10KnZoT60Vl0yVSur7QY8zdpcnpCWojRqDgcoettB1wHnkfKkY7oz0gS0TkkGyqS5pVC64RTNjRyKDfURu7d0dUqfQNhceqxLIx3VYkjnEvTcWnZSy88qiJZiH2l8GHwhr2NX2I/MCvmAYDXbOVqgDCwNGU6g7YJ4DHNKLi9skbRdq0VrTcco9qVhPAkHzgc/RuTXSZ5QdV3XRiBurUeByiX7UfZTw+QpE7UMxLYjsMIqt7FYe05uMNLv7J7z845SCREbcg8/dEqy2O7uAissxxpQHlX4RKLRNORdu7L3CCgRK9nIzavhSOXPRR7/fEBRtrE8zX3mNP0b6PBwJs84UPYUmhem0n1Vy7/fUYOTpACLLdjzWwoATtpkAN5ppGgstwSZecwmY+6pCDu29/hB+3WiWqKiKFpsWgUeGRjPW+0gUUtQsGIGfWC0xZ6ZVGXyj19Joo0nLlnLmzNcIuTL4VBhlqqj8ICjy1igL4mM1MTEnYD8BAOWky0PgQZDtN6q8z8I2N13dLkL7TbWO2PVlDFhVVb9HBGeTLLul7LF22R2GJqnvy8Tl4RFe9zTpzAY5aouYBJJrTMnLOLj2/8UV2twjkqcnZ1/SlQOXogtatPWu9ZYqORJqIvC5jkDa5pAyAAUAcqgwxrwERNeHGL+Kb/pC3xX9leb0LsjVxFzUsxPUBqxq2YXIE5kaGHp0SswFKuR+JsVOVdId9v4wht3GD8O32HzJFVuhFl9qYOT/OsVJ3QSQezaJ6/qU/CCZtnGEa2gZkiF+G+wvnM9P/AOn59S1v+pQfjA2d0DtI7FpQ80HzMaqZfKjQFuWQgbaukLjQARcdHu8ES1cYq2zOTeiNvXMTJRHEAf2RTtPR+8NcMtuVD5lRGjl3rNdsqk8NfGL6Wkrm8w8ga+cU9Al2THW7ujz17ntw1kjuw/5RG1ktIyaUB+mp8jHoz38iigFeefvio/SJtEy4AU90StBfsb1yXlGDWw2gaSmz3K390I9lmjto4/QQPdHpFmts19WPLOD9hRiBjNQdQcxGU9JGPk2hqHLwZDotZ2WzCqtm+IjCa0D7gK6JG1l3kzKMFnnMaDNgEWtPxkGndAO/J06yvjlPWU4PVarBSNQDqBtGdMjAK3dMJzoVBVKinVU18SfdSFDRufKfAT1Kjw1yEelPSPq+idUAVlaqtjoy1oKkCpBocgaHblGGm39mcCCu9qsfCD/Rvog1pPp7QxMupCqpoXoaGpGarXKgz+PpNhscuUgSWiog2KAo5nfzMaqaxLbDj2ZvH8n1S/Y8ouu02+a49GswDLrBMCf1soHnFm9egFpmPiRpZBZmJLMM2piPZz0jf3h0ns0qvX9Iw9VOt+7sjxjH3z00nPQIGQMcKhAWdidAW2d1IiVz7RpFqH5Q30euGRd8ss7rjYddzkW/Co1w8Brtia19NJKA+jxO2zLCteJOcYmcjucTsWc6lmq3KpiqyZ0Iod0OMI9ClKXZdl3vS0h2ZQ0xs1GQautB5842TtuzjyW/VVgWSmJKdYHrVXM14ZGnLjHpt1zQ0pHOrIp8QDHnamSlK1+h2YU0qYQludKRVmLMrkgpziwrwx5dTXEY5jcxJvEbvfDGvE7F8otJYwd3fEv2NRqwHIGOfgmgettc6KfrlEtXP18zFpkljRmMR+mQbIV+kKkHOit0GfOVWPVHWensjZ3mg8Y2t54jMK0ARAAoU+Z5boodC8MuzGYAMbkDuFaHlmYuWuYBxY5mPU0mGlbRjll4Q1VXb5wy0zkphKhtwIFN1eEUrRaQBnrAmc9SSGYE8a+RqI9SONs4pzSCqTlQYUAUblAA8BEMy28YEu77H8V+REV3d/wnxHzjojjXk55ZK6Cr27jFZrdxgS8xt3gfnSIGmncff7o3jjic88zQYa2cYYbZAYzzx8D8oaZ/GNFjiYS1EvQY+1xxtm2sBvS108dn8wleMV8aI+eXkNy57v2RQb2+AiQYfWOI8T7hADFHY4Tw/cuOorxYXtlqAFFzPOBQArVjXgPnDC0Ol0NSWwqubNStBuoNTuHuhScMUbk6Qv8AZnlUVf2LUmY7kJLXM6Ku3n8zGrsHQnEA0+cASK4UI/3EZ9wjGWS/HOJLOgRPWd+2/Mj/AGigjc3MJxHVVGpnkiDKmbY2BNeJJjx9Rr5N1j4X8nsYP8fGKTyO368Iut0KsgGZbmXJ91IyVqu2Uk4pLbGozP4TXJTxpnTZlvEGLRfDykCY6zGWgxGoA0Ltw3DaeAJA2yMijUnUlqE1JzJJAzJMPBPM3cpNorNhxR4SSYSsa4V3e+B9+3/6BKJ22GW0jdQHVjs5E7IW1Xmi0BaldBQ1J74wt6XkWdmxYTWhbU19ld+VBlu1h557Y35DFG3SBl4X3aFfFMQCp9arEj81dfqkGLDPWagdRQdkj2WGw/WcCZk0MGRiWX1lYUYfiXfTWHdEHKT3ktoynkSuhz2EGvIRy4s8lLlm88UWuEaewXtPk1Ep6BtVpiBOlaEZHjE1pW0zs5ztQ0orGla5iiL76U4xbZxKJwjCBtFA5y1qK0rspspFFryb1eqPw5HvbU95jdzbd1RmoJKrLMq6MObkL+c0/bqfCLkpJK+uwO9UyHia+UAzOJhROiW2ykkgrbpAWlCGVhVTSnDTYcoCXk4VGfao9+Q8zBWQ+NMA7aEso3g9oDjtjO9JZhEsLoWY/tUn30gk9sWwq5IFIlZGI6kE/ur8I3lz3fMMiWcZFUSg3DCIwglvgdGyJZlA4dke8R63ZUCqEHqgL4ACPNm6R1RXJRFkZQAXaozrCehm+2fAQYwCGUG6MrNDDNeJ2CkQTZ7tt8IeFA2RxYDWOayeWVlkk6k+MPWTSJPTiI2tIg5FR6B0Wt2KxhDrLd07jRx5sYS22umhz3x5ZenSKdIbBKdlBoSBoTTMnedB3QyX0otIUszqTlQYRnnnnsj3NPmjGK3HLkhKXR6BNnmIC8YmR0yf1kXurX4CL8rpbLPaRh5/CPQhqcT8nHPDk9GqkKGYAsFG1iCQBtNBmeQhb7WUjBZLs4wjExpTEdgoNgpvzgEL6kkBiSoOhIFDyoTD0t0ptHU+XvjVSTmnu49GMova1t59kpeI3eHY1OjKeREMZI6oyRxzxyojLQlYQqY4KY1Ukc+1oWEiVJJMTJZoHNDUJPwVaQuAxeWQN0OeRUDTIg0PZYD1Wy008KbYynl2ptKzWGByaTdEl29HrRPUMirgrQsWAHdtPPw3g+nQuiBHnIqjOi6kk9ogZk/qih99zAAMctABkACQPE1ipO6QU7U48lCge6seNmx588rlS9L0e3heHCqj+79mis3RqyS+07vQZ4VCjfmTrEl4X4iKZVnXWmJiSRQZUrp3CMPP6Qp7LPxarf7oo2jpExFFUjidnIQoaLn6mOeq4+lGpQaljUnNjtY/AcIFXvfCLRFz2kA7tF4Rmp94zHyZzTcMvdrEMpCxoI74wSOOWRvotWi1OwaYxzAog/ExoAPGsZ+3KRSh2f8ANOfygxezhFRd1XPMDCvmYDn/ALjEjLIliSAoA1OegjytXPdkr0ehpo7YW+2PLsVVj2koa712iLNj6trksNDVe4KaftZR3QgZWSi+qaHkRUUO4wtlWs2z8x/tb/ERhD8yN30zcW+1BpFG7SEBeKnVe6gMAy5ie8pwAAJpU10rkP8AmILPa5YBxS2Y7Djp/bHRPIoujKMXI4OYH31bnlKpFMzpTOlNan5QUN4AZoiJ+IksR3vkO4QD6SIzqjsWOImjEGjCg0La0y0jB5pN8cGmxIK2G34lVgc8jUfWUUr6tbTJqKzE4Rt/ET/jAi5ZpllsZwoM8W4+yBtJ3cIalrxzS+mlOQy0/VWLll3Qp9kqNSs0N2oHtCKooqtLHe0wOx8EaPS1dRGA6M2YI4YsGIq5I0qVwIPAue+Nak4GOOfLN4hb02wQnpIoemGyOxHf9eMRRRiHtRMV3nxX9JWHqpMRtJOZzxh6KYelmY6CCNhuWazKcD4aipochXM8codBRjb7kFnZxmq4VJ2Bs6rzyPhEE06CtcgY08zo/MQTJLjqswZHrUM3sncxoMqb6RmSuDEjpmOJBHDlHWujMrAisOyhZgB0FO+sRlIYBQ2PDLmYiTSVLmSiua9d1BqK9U6rTfUwOmyCjYXBVgASNoqAQDuNDpGouRZEyzsjzAr4GRq7EVzMU1JGjNWv4abMsxe71nzTUHrvppSuVKcKQWx0OV2Gjkd5izZba6tm7AUPZpWtMtQYGI8SekilOS6ZDjF9oLC/p6nJsQ/EATBKwX+zMFZFNdKGlTuzyrGYDViSXpG0dVlj0zOWnxy7Rv5V4qwJUEU1ByYHcRqIpzb5b1RAOx3mcPWqXSgBGpT2TvA2QRWWCMQzBzj0cOdZY/dHDmxPG1XQ9r1m7wPrnED25zq57oSfJ3HOKs1GXYPGLk2iEStOrqWPfDBMA2ecDJ9vINAo8f4iE21uA+uccstTBeTeOCb8BuXMBNImjPy7cwPW03jUQes0zEK/XONcWWM+icmOUOyVJS7ouyUoMhQRXQRblxq2RFGc6RTeuRuCr49b4xHd1hxoy1zappWlcIyHElmXLhCXvm7/AJqeFR8Is2ayuyqqHC527gRQ+W2PFyO5N/c9SCqKKdgQiUxOlVHOheCN3LWbI4KW/aw/uENt+FEElMyoz/MRhUc+t5xfsksJPegJ9GgQUFSSaZDeeoYI8yQS6LVtscybOCIpY4AaAaCp7u801EX5XRtJYrPmqh9hevM8OyvfWBNqvRZbs4chqYQVamVApzGuQ4wNmX4xFJaUO1mzPcNPHwiJPc2ykqVGnt1rlSUxSUQOMhMnnGw4gHqofyg8oydrtfpHLuzT3Prvkg5LkSOdBwiOVZHmNicljvPuG4cBGiu+5AKExLaQ6AMu5Xm5szcNw5AZDui9ZuiNCDjYcgPjGukWUKMhFjDTLbu2xO5j2oH3fdqylwrXiTmSeMEFFch/EPWTXXw+ZialMokoZLSmZzMcZvCHYDC/Z4AOk9F7KnamFz+FfiYuJZbKnZk4jvc/KImfh4xA7ngImhhH7xCdiWiclz8YpWm9ph1cjll7ooTX4wPnsYaQrG9IKzpJlhgM1YNt6pqNo8a+MZ55mMYLSmOmSzEYY+RDUxmLNsmHfAe0OTGsWyGhZ10yyepPX8s0GW3i3VPjFedc89BUy2K+0oxL/UtV84iMxxoxHCuXhCSrc6Gq0B3gYW8UIMVYqHWSe8ssUYoSrIabVbUU2/xFE2emVIL/AH+57dW/Nhf/ANik+cSC+JbduWnejr5o5H7YLADLK4QpljdBpbTZmzwAflnAeU1AfOJGSQRUSrSfy+jceKmCxAAyxE1jQE0Zgo3mtO+mflF6dOkL/wCCcfzuqf2mKxvan/1yJanexxn9xw+UMCWXJKDGdDkv4t5AOoGld5i9ZrwRZYDNnU5d5gBPnzHbE71O8muWwACtBwiHCa65cK/GNMWV45WiMkFNUw9NvZdgJijPtjNsoOecVpYA2GHkV2+Rr8vOLlqJy4bIhghHmiFzU1hEh7JwMNwHZGBsc6xbuq1FGoa4a0rsrurFiyXOxo00FRsX1m/xHE57htgkq5NLcASmFMK1ohGaOvEHU6kFouGRwkmiZQUo0wikgkAilDmM4uSyEGoLndoo+cApM55X/ZngowzWoyZToRTUcourONMlYD2m6i8+tRm/SDHpPPBxuziWOSlVANWrMPEsfOvurFx7SE0OcCxXgSpIO4kE+RFRBGzXY03OWQw21YLh4PU5UjybO8S5LNjnY27KVmueC9gcy1PCKM2e7O7KT1znxoa+/ONLMlKifZpTB3ch5zjQ07Kr+AbN+ukSWG5gNRCcqKSM7ZrqZzU1MH7FcVNYPWexgaCLQQCM3IaRSs1hVdBFsJQbh9eMSoCdB3nTwiZZQ5nft/iEMrJiOmXHb/EWEULz8++JCg5QzBugGd6SJUlwiyjqfr5xLLpCAkRIXFwiWz2dnbCgJP1qdgjQWfo2MIxt1ttNIEmwbMcxMRMhi7hhPRQrAGvKMVZlnrBs2eGNZhDsDMWi76wMtF1HdG1aQIieRuEPcKjAzbrbdFSZdxj0J7HXURWe61OyHuFtPPXsZ3RA9lO6PQHucHSKky5uEUpC2mFazGGGzcI2My5zuipMus7oe4KM6s6YvZmOOTMPjDzbp21681U+8QWe7juiFrvO6DcFA37bM3p/Qn+Md9vmbk/00/xi8bvMMNhMOxUVReMzdL/00/xjvvOZ7Mv/AE5f+EWPsDbo77vMFhRAL0mfgH/5y/8ACHres7Y+H8qop8VAMS/d53Qou1t0FoKK32yZ7RMKLY/Hxi0LsbdEqXW+6C0MhW9ptApd6DQYjQchXKIzbX9Vc95MGbNdLH1YL2a596wnJBRiJBmYjVCcWtBBi77ttDEFVwD2nC1HKoJ8I2Em7lXYItpKpEuQ9oOu66VQZkuxzYnUmCipSFUE6CJUlb8/dEWURip0/iJFk784fi3Q8KNphgKq0hMRPZHedP5jigOun1shy56QgECU1NYcG3Z/XnDxJ3wRu+63mHqig9o6D5wADklk614CDt23A70L9Rd3rH5Qeu+6El50xN7R+A2QQdgoqTQCKUfZLl6IbLZElrhRQB5nmdsdMtSKaFwDurGfvXpHqknkX2d2+MzMlu5xEmpgbroFH2XqDdHUiYJDqRkWVvRmE9CItUjqQAVDJhrSxForCFeEMCkZUMNni8YYRABSeQIiaRBApDGUQCBzWaImsKnZWCDuBDKMdnjDAHNdy7oge7Egx6HefCFEgDZDsKARupTshPuhIOlIaUgsKAv3QkL90pBgSjCiVBYUCBdK7oet1JugsEhwWCwoGJdq7omSyIPVrF7DCGCwK4lDdHGXE4UmHpI35wAVBLJ0HeYetm35+6LtAIaTBYEBQCGlN8WMA+tf4hcH/EICBUhpAHE+6LPo4QqB8P4EAECySdYuWSysxwopJ4QTu64XejPVE3esflGostkVFwqoUeZ5nbFKLYnIE3fcCrRpnWPsjTvO2DiIAKAUA0A0jpsxVFWIAG+Mxe/SXVJWu/aeUXxEnlhq8r2lyR1jU7hrGNt15TbS1M1TcNvOIEs7Ocbmp3bouKlBlpEOVlpUQpIAiSHYKw/DEjHBxHekjo6JAQtCYxCx0MBMUMLR0dAAxnA1MRNaNwrHR0AhhLncIT0G8kx0dAA9ZQGgEOIhI6ABOUJgjo6ADsEJhjo6ADqQlI6OgA7DDWIjo6GAlCeEOWXCx0AD6gRG06FjoAIzM+tsOSp4e+OjoAJlSFMJHQAXbFdcyZ2RhX2jp3DbGlu+50l50xN7Ta926OjouMUSwlA28r5lyRribcPjuhI6G2xGQtt5zbQ2tF8h846z2ZV57SdTHR0Zs0LIEOjo6ADhCR0dAB//2Q=="
        className="rounded-[10px] m-auto hover:scale-105 duration-150"
        alt=""
      />
      <CardContent>
        <Typography
          variant="h6"
          className="hover:border-b hover:border-black hover:duration-500 hover:w-fit"
          sx={{
            fontWeight: 700,
            fontSize: "18px",
            color: "#1F1F1F",
            cursor: "pointer",
          }}
          color="text.secondary"
        >
          2021 Mazda 6, 2021
        </Typography>
        <h1 className="flex my-2 items-center justify-between text-[16px] font-[700]">
          <span className="flex items-center">
            <LockOpenIcon />
            VIN:
          </span>
          <span>763289cdnjcdb67890</span>
        </h1>
        <div>
          <h1 className="text-[24px] flex items-center justify-between mt-[10px] mb-[-20px] font-[700] text-[#1F1F1F]">
          <span>Final Bid:</span>   <span>$7,985</span>
          </h1>
        </div>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
}
