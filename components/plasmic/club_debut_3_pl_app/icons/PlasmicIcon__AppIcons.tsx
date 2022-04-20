// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppIconsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppIconsIcon(props: AppIconsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 23"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M14.988 7.532c.015-.12.023-.239.023-.36V7.17c0-.12-.008-.24-.024-.361a2.875 2.875 0 00-.19-.64 3.108 3.108 0 00-.374-.595 2.978 2.978 0 00-.506-.47l-.023-.017a3.383 3.383 0 00-.64-.343 3.618 3.618 0 00-.706-.176 3.697 3.697 0 00-.788 0c-.238.035-.47.094-.694.174a3.6 3.6 0 00-.515.26 1.855 1.855 0 00-.184.125 3.035 3.035 0 00-.457.427l-.019.021a2.966 2.966 0 00-.372.59c-.09.209-.153.427-.191.65a2.94 2.94 0 000 .726c.038.218.102.432.19.64a3.112 3.112 0 00.374.594l.043.049a2.975 2.975 0 00.432.397l.032.024.023.017a3.383 3.383 0 00.64.343c.226.082.463.14.705.176.263.028.526.028.788 0a3.56 3.56 0 00.694-.175c.18-.073.352-.16.516-.26.044-.028.088-.056.13-.085a3.04 3.04 0 00.51-.466l.02-.021c.03-.04.062-.08.09-.12.109-.148.203-.305.281-.47.09-.21.153-.428.192-.65zm.009-.055l-.002.015.002-.015zm-2.51 2.312zm-.659 0zm-2.51-2.312zm0-.607zm2.51-2.312zm.66 0zm2.509 2.312l-.004-.029.004.029zm.948.265a3.287 3.287 0 00-.68-1.956 3.87 3.87 0 00-1.835-1.292c-1.454-.494-3.188-.06-4.17 1.041a3.42 3.42 0 00-.881 2.005 3.25 3.25 0 00.536 2.046 3.683 3.683 0 001.648 1.36c.39.16.78.259 1.204.305.393.043.792.017 1.18-.056 1.49-.278 2.72-1.452 2.947-2.841a3.535 3.535 0 00.051-.612zm.798 10.335h1.159l.042-.001.085-.02a.773.773 0 00.075-.04l.018-.015c-.006.01.016-.006.034-.03l.009-.01c.004-.005.007-.009.012-.012l-.01.008a.742.742 0 00.037-.058.733.733 0 00.022-.068c.004-.058.003-.117.002-.176v-1.182c0-.241 0-.483-.03-.724a3.394 3.394 0 00-.248-.79 3.603 3.603 0 00-.479-.719l-.032-.034v-.001a3.943 3.943 0 00-.53-.474c-.009-.005-.018-.014-.03-.023-.03-.028-.072-.064-.1-.069-.002 0 .002.003.01.008a.075.075 0 00-.004-.002l-.03-.018a4.513 4.513 0 00-.772-.385c-.29-.1-.591-.171-.899-.214-.275-.027-.55-.026-.826-.026h-4.22c-.268 0-.535 0-.802.027-.31.043-.612.115-.904.216a4.49 4.49 0 00-.862.446c-.04.03-.08.058-.118.088a3.915 3.915 0 00-.424.377l-.027.024c-.031.028-.073.064-.078.088 0 .002.003-.001.009-.008l-.003.004-.02.025a3.605 3.605 0 00-.44.675 3.35 3.35 0 00-.245.789c-.022.164-.03.33-.03.494v1.434c0 .05 0 .1.002.149l.024.075a.644.644 0 00.044.065l.018.015c-.01-.004.006.015.034.03a.696.696 0 00.013.008.308.308 0 01.013.01l-.01-.008a.98.98 0 00.066.032c.025.007.05.014.076.019l.058.001a191.74 191.74 0 001.346 0h8.965zm-10.511-.052a.316.316 0 00-.05-.04.723.723 0 00.008.008l.026.02.013.01s.002 0 .003.002zm-.096-.084zm-.025-2.112zm.295-.946l-.02.042.02-.042zm.426-.623zm2.497-1.243l-.04.005.04-.005zm5.665 0l.04.005a2.957 2.957 0 01-.04-.005zm1.082.258l-.047-.017.047.017zm.712.372zm1.423 2.184l-.006-.036.006.036zm.013 2.034a2.818 2.818 0 01-.002.003m-.055.09a.29.29 0 00-.045.043.716.716 0 00.032-.03l.01-.01.003-.004zm-.096.083l.013-.008c-.007.006-.012.009-.013.008zm-.16.987c.65-.012 1.268-.424 1.374-1.001.033-.178.032-.358.03-.537v-1.09c0-.164.001-.328-.013-.492-.078-.915-.488-1.773-1.18-2.465-.649-.65-1.558-1.119-2.524-1.296-.497-.092-.99-.097-1.492-.097h-3.681l-.253-.001a8.773 8.773 0 00-.904.023 5.565 5.565 0 00-1.564.379c-.444.18-.856.431-1.213.723-.721.589-1.236 1.399-1.406 2.25-.092.46-.087.926-.083 1.392l.001.29v.658c0 .457.28.92.763 1.125.225.095.459.139.709.139H17.91z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15.011 7.173h.25v-.476l-.392.27.142.206zm-.023.36l.247.042.001-.011-.248-.032zm.023-.36l-.25-.002-.003.48.395-.272-.142-.206zm0-.004l.25.004v-.005h-.25zm-.024-.361l.248-.032-.001-.01-.247.042zm-.19-.64l.231-.098-.005-.01-.225.108zm-.281-.475l.202-.146-.002-.004-.2.15zm-.093-.12l.194-.158-.004-.005-.19.163zm-.043-.05l-.187.167.003.003.184-.17zm-.206-.207l-.169.184.17-.184zm-.226-.19l.154-.197-.007-.005-.147.202zm-.031-.023l.15-.2-.15.2zm-.023-.017l.148-.202-.006-.004-.142.206zM13.764 5l-.13.213.002.002.129-.215zm-.51-.258l.094-.232-.009-.003-.085.235zm-.706-.176l.037-.248-.01-.001-.027.249zm-.788 0l-.027-.248h-.009l.036.248zm-.694.174l-.085-.235-.01.004.095.231zm-.515.26l-.131-.213-.003.002.134.211zm-.131.086l-.142-.206-.005.003.147.203zm-.053.04l.15.199.004-.002-.154-.198zm-.226.189l.17.184-.17-.184zm-.206.208l-.185-.169-.005.007.19.162zm-.025.03l.187.165-.187-.166zm-.019.02l-.189-.164-.005.007.194.157zm-.091.12l.202.147.001-.003-.203-.145zm-.28.47l-.227-.109-.004.01.23.098zm-.192.65L9.08 6.77l-.002.012.249.03zm0 .726l-.248.031.002.01.246-.041zm.19.64l-.231.097.005.01.225-.108zm.282.474l-.203.146.003.003.2-.15zm.092.12l-.194.158.004.005.19-.163zm.043.049l.187-.166-.003-.003-.184.169zm.206.208l-.17.184.17-.184zm.226.19l-.153.197.006.005.147-.203zm.032.023l.15-.2-.15.2zm.023.017l-.149.202.007.004.142-.206zm.129.084l.131-.212-.002-.002-.13.214zm.51.259l-.094.232.009.003.085-.235zm.706.176l-.036.248h.01l.026-.248zm.788 0l.027.248.01-.001-.037-.248zm.694-.175l.085.236.01-.004-.095-.232zm.516-.26l.13.213.004-.002-.134-.21zm.13-.085l.142.206.005-.004-.146-.202zm.053-.04l-.15-.2-.003.003.153.197zm.226-.189l-.169-.184.17.184zm.206-.208l.185.168.005-.006-.19-.162zm.026-.03l.187.166-.187-.165zm.018-.02l.19.164.004-.007-.194-.157zm.092-.12l-.202-.147-.002.003.204.145zm.28-.47l.226.108.004-.01-.23-.098zm.201-.706l.247.038-.494-.078.247.04zm-.002.015l-.247-.038.494.078-.247-.04zM12.487 9.79l-.034-.248.065.496-.03-.248zm.031-.004l.034.247-.065-.495.031.248zm-.69.004l-.032.248.066-.496-.034.248zm-.016-.003l.032-.247-.066.495.034-.248zm-2.494-2.31l.247-.039-.494.077.247-.037zm.005.03l-.247.039.494-.076-.247.037zm-.005-.636l-.247-.038.494.078-.247-.04zm.003-.015l.247.037-.494-.077.247.04zm2.507-2.297l.034.248-.065-.496.031.248zm-.031.004l-.034-.248.065.496-.031-.248zm.69-.004l.033-.248-.067.496.034-.248zm.017.002l-.032.248.065-.495-.033.247zm2.493 2.31l-.247.04.494-.077-.247.037zm-.004-.029l.246-.04-.494.077.248-.037zm.952.294l-.25.004v.01l.002.012.248-.026zm-.68-1.956l-.198.154.198-.154zM13.43 3.887l-.08.236.08-.236zM9.26 4.928l-.187-.166.186.166zm-.881 2.005l-.25-.02.25.02zm.536 2.046l-.209.138.209-.138zm1.648 1.36l-.095.23.095-.23zm1.204.305l.028-.249-.028.249zm1.18-.056l-.046-.246.046.246zm2.947-2.841l-.246-.04.246.04zm.053-.573l-.25-.002v.002h.25zM17.9 17.47v.25h.003l-.003-.25zm0 0l.004.25.075-.487-.078.237zm0 0v-.25l-.077.488.078-.238zm.002 0v.25h.009l-.01-.25zm.042-.001l.012.25.019-.002.018-.003-.05-.245zm.085-.02l.068.24.018-.005.018-.008-.104-.228zm.075-.04l.127.216.018-.01.016-.014-.16-.191zm.052-.045l-.2-.15.2.15zm.02-.022l.168.185-.33-.375.163.19zm.028-.05l.216.127.01-.02.008-.02-.234-.087zm.022-.068l.242.064.005-.023.002-.023-.25-.018zm.002-.176l-.25.004.25-.004zm0-1.181h.25-.25zm-.03-.725l.247-.032-.002-.012-.246.044zm-.248-.79l.228-.103-.005-.01-.223.113zm-.31-.505l-.204.145.002.003.202-.148zm-.169-.214l.192-.161-.009-.009-.183.17zm-.032-.034l-.184.168.184-.168zm0-.001l.184-.168-.002-.003-.182.171zm0 0l.182-.17v-.001l-.182.17zm-.1-.103l-.176.178.002.002.174-.18zm-.431-.37l-.152.198.003.002.149-.2zm-.028-.024l.165-.188-.165.188zm-.1-.069l-.044.247h.002l.041-.247zm.005.006l-.133.212.133-.212zm-.03-.018l-.135.21h.001l.135-.21zm-.257-.15l.118-.221-.118.22zm-.515-.235l.09-.234-.008-.002-.082.236zm-.899-.214l.034-.247-.009-.002-.025.25zm-.826-.026v-.25.25zm-4.22 0v.25-.25zm-.802.027l-.024-.25-.01.002.034.248zm-.904.216l-.081-.237-.009.004.09.233zm-.578.27l.12.22.003-.001-.123-.218zm-.244.148l-.135-.21-.01.006.145.204zm-.04.028l-.143-.204.143.204zm0 0l-.144-.204.144.205zm0 0l-.145-.203.145.204zm-.118.088l.153.198.002-.002-.155-.196zm-.424.377l.177.177.003-.003-.18-.174zm-.027.024l-.164-.188.164.188zm-.078.088l.244.056v-.002l-.244-.054zm.006-.004l.194.158-.194-.158zm-.02.025l.19.161.002-.001-.193-.16zm-.173.225l-.205-.143.205.143zm-.268.45l-.223-.112-.005.01.228.102zm-.244.789l-.247-.045-.001.012.248.033zm-.03 1.928l-.25-.002.25.002zm.002.149l-.25.015.002.025.007.024.241-.064zm.024.075l-.235.086.008.021.012.02.215-.127zm.044.065l-.198.153.014.017.016.015.168-.185zm.052.046l-.124.217.124-.217zm.026.017l-.162.19.328-.376-.166.186zm.056.024l-.102.228.016.008.018.005.068-.24zm.076.019l-.05.245.019.004h.018l.013-.25zm.058.001v-.25.25zm.897 0v-.25.25zm-1.139-.084l-.164.189.164-.189zm.026.02l-.148.202.148-.201zm-.08-.072l.194-.158-.12-.147-.174.076.1.23zm.009.011l-.176.178.37-.337-.194.159zm-.034-2.123l-.247-.038.493.08-.246-.042zm.005-.034l.247.038-.493-.08.246.042zm.29-.912l.226.108-.45-.217.224.11zm-.02.042l-.226-.106.452.213-.226-.107zm.486-.712l-.191-.162-.008.01.199.152zm-.022.025l-.185-.169-.007.01.192.16zm2.48-1.221l.031.248-.061-.497.03.249zm-.042.005l-.031-.248.06.496-.029-.248zm5.706-.005l.03-.248-.062.496.032-.248zm.04.005l-.03.248.06-.497-.03.248zm1.042.253l-.086.235.173-.47-.087.235zm-.047-.017l.084-.236-.17.47.086-.234zm.814.424l.135-.21-.01-.006-.125.216zm-.03-.019l.144-.205-.01-.006-.133.211zm1.398 2.168l-.247.041.494-.08-.247.039zm-.006-.036l.247-.041-.494.08.247-.039zm.013 2.106l-.247-.038.494.08-.247-.041zm.006-.036l.247.038-.473-.146.226.108zm-.002.003l-.225-.108-.018.039-.005.042.248.027zm-.091.125l.165.189-.165-.189zm.023-.022l-.18-.174.18.174zm-.083.07l-.132-.212-.204.127.12.209.216-.124zm.013-.008l.153.198-.286-.41.133.212zm-.174.995l.005.25-.005-.25zm1.375-1.001l-.245-.046.245.046zm.03-.537l.25-.002-.25.002zm0-1.09l-.25-.001.25.001zm-.013-.492l-.25.021v.002l.25-.023zm-1.18-2.465l-.177.176.177-.176zm-2.524-1.296l-.046.246.046-.246zm-5.426-.098l-.002.25.002-.25zm-.904.023l-.024-.248.024.248zm-1.564.379l.093.232-.093-.232zm-1.213.723l-.158-.194.158.194zm-1.406 2.25l-.245-.05.245.05zm-.083 1.392l.25-.003-.25.003zm.764 2.073l.098-.23-.098.23zm12.12.139l.004-.25h-.004v.25zm.015 0l.003.25-.003-.25zm.004 0l-.004-.25.004.25zM14.761 7.173c0 .11-.007.218-.021.328l.496.063c.016-.13.025-.26.025-.391h-.5zm.392.206l-.284-.412.284.412zm-.392-.214v.006l.5.003v-.001l-.5-.008zm-.022-.325c.014.11.022.22.022.33l.5-.002c0-.131-.01-.262-.026-.392l-.496.064zm-.171-.575c.08.19.139.386.173.585l.493-.084a3.135 3.135 0 00-.206-.696l-.46.195zm-.255-.425c.1.138.186.283.26.436l.45-.217a3.367 3.367 0 00-.305-.512l-.405.293zm-.084-.11l.087.113.4-.3c-.03-.04-.063-.084-.099-.128l-.388.315zm-.033-.037l.037.042.38-.325a2.148 2.148 0 00-.049-.055l-.368.338zm-.19-.193c.066.06.13.125.187.19l.374-.332a3.215 3.215 0 00-.223-.226l-.339.368zm-.21-.176c.073.057.144.116.21.176l.338-.368a3.673 3.673 0 00-.242-.203l-.306.395zm-.03-.021l.036.026.293-.405-.028-.021-.3.4zm-.02-.016l.02.016.3-.4a5.73 5.73 0 00-.024-.019l-.296.403zm-.11-.071c.037.022.076.048.116.076l.284-.412a2.868 2.868 0 00-.142-.093l-.258.429zm-.476-.241c.166.067.325.147.473.239l.263-.425a3.633 3.633 0 00-.548-.278l-.188.464zm-.648-.161c.226.033.447.088.657.164l.17-.47a3.866 3.866 0 00-.754-.189l-.073.495zm-.725.002c.245-.027.49-.027.735 0l.053-.498a3.95 3.95 0 00-.842 0l.054.498zm-.636.16a3.31 3.31 0 01.645-.161l-.072-.495a3.81 3.81 0 00-.743.186l.17.47zm-.47.239c.152-.093.311-.173.48-.242l-.19-.463c-.191.078-.375.17-.551.278l.261.427zm-.12.078l.124-.08-.268-.423-.139.09.284.413zm-.04.03l.046-.034-.294-.405-.06.045.308.395zm-.21.177c.066-.062.136-.12.207-.174l-.302-.4a3.3 3.3 0 00-.244.206l.338.368zm-.191.192c.062-.067.125-.132.19-.192l-.338-.368a3.617 3.617 0 00-.221.223l.369.337zm-.023.027l.028-.033-.38-.324a1.968 1.968 0 01-.023.026l.375.33zm-.017.02l.017-.02-.375-.331-.02.022.378.328zm-.077.1a2.2 2.2 0 01.082-.107l-.388-.315a2.49 2.49 0 00-.101.131l.407.29zm-.258.432c.072-.15.158-.295.257-.43l-.404-.295c-.118.16-.22.332-.304.51l.45.215zm-.171.585c.035-.204.093-.404.175-.594l-.46-.197a3.177 3.177 0 00-.208.706l.493.085zm.002.652a2.642 2.642 0 010-.663l-.497-.062a3.142 3.142 0 00.001.788l.496-.063zm.171.573a2.632 2.632 0 01-.172-.584l-.493.085c.04.239.11.47.205.695l.46-.196zm.255.426a2.862 2.862 0 01-.26-.437l-.45.218c.086.178.187.349.305.512l.405-.293zm.084.11A3.68 3.68 0 0110 8.504l-.4.3c.03.04.063.084.098.128l.388-.315zm.033.037a1.717 1.717 0 01-.037-.042l-.38.325.05.055.367-.338zm.191.193a2.701 2.701 0 01-.188-.19l-.373.332c.07.079.146.155.223.226l.338-.368zm.21.176a3.165 3.165 0 01-.21-.176l-.338.368c.078.072.16.14.242.203l.306-.395zm.029.021l-.036-.026-.293.405c.01.006.018.013.029.021l.3-.4zm.02.016l-.02-.016-.3.4.024.018.297-.402zm.11.071a2.33 2.33 0 01-.116-.076l-.283.412c.044.03.092.062.141.092l.259-.428zm.476.241a3.132 3.132 0 01-.473-.24l-.263.426c.173.107.357.2.548.277l.188-.463zm.649.16a3.368 3.368 0 01-.658-.163l-.17.47c.244.088.497.15.755.188l.072-.494zm.724-.001c-.244.026-.49.027-.735 0l-.052.498c.28.03.561.03.841-.001l-.054-.497zm.637-.16a3.31 3.31 0 01-.646.161l.072.495c.255-.037.503-.1.743-.186l-.17-.47zm.469-.239a3.304 3.304 0 01-.48.242l.19.463c.192-.079.375-.17.552-.279l-.262-.426zm.12-.078c-.038.026-.079.052-.123.08l.268.422c.043-.027.091-.058.138-.09l-.283-.412zm.04-.03l-.045.034.293.404a1.01 1.01 0 00.06-.044l-.307-.395zm.211-.177c-.066.061-.137.12-.207.174l.301.399a3.24 3.24 0 00.245-.205l-.339-.368zm.19-.193a3.143 3.143 0 01-.19.193l.339.368c.078-.072.152-.148.22-.224l-.369-.337zm.024-.026l-.03.033.381.324.023-.026-.374-.331zm.016-.02l-.016.02.374.331.02-.023-.378-.327zm.077-.1c-.024.035-.052.07-.082.107l.388.315c.033-.04.069-.085.101-.131l-.407-.29zm.259-.432a2.71 2.71 0 01-.257.43l.404.295c.117-.16.219-.332.304-.51l-.451-.215zm.17-.586a2.673 2.673 0 01-.175.595l.46.197c.098-.228.167-.466.208-.707l-.492-.085zm.009-.051l-.002.014.494.079.002-.017-.494-.076zm.492.091l.002-.013-.494-.08-.002.017.494.076zm-2.721 2.506c.01 0 .019-.002.028-.003l-.062-.496a3.29 3.29 0 00-.034.004l.068.495zm-.036-.5a3.57 3.57 0 01-.029.005l.062.496.034-.005-.067-.495zm-.624.005l-.016-.002-.067.495.018.003.065-.496zm-.082.493l.015.002.068-.495-.018-.002-.065.495zM9.071 7.517l.004.025.495-.073a2.588 2.588 0 00-.005-.032l-.494.08zm.499-.05a2.497 2.497 0 01-.004-.027l-.495.074.005.03.494-.078zm-.005-.559l.003-.014-.494-.079-.003.017.494.076zm-.491-.091l-.003.013.494.08.003-.018-.494-.075zm2.72-2.507a2.74 2.74 0 01-.028.004l.062.496.034-.004-.068-.496zm.036.5l.03-.004-.063-.496a4.238 4.238 0 00-.034.004l.067.496zm.625-.004l.015.002.067-.495a2.95 2.95 0 00-.017-.003l-.065.496zm.081-.494a1.65 1.65 0 01-.015-.002l-.068.496.019.002.064-.496zm2.708 2.518a1.25 1.25 0 01-.004-.025l-.495.073.005.032.494-.08zm-.498.05l.004.027.494-.074a1.645 1.645 0 00-.005-.031l-.493.078zm1.45.251a3.537 3.537 0 00-.734-2.105l-.394.307c.404.52.617 1.165.627 1.806l.5-.008zm-.733-2.105A4.12 4.12 0 0013.51 3.65l-.16.473c.7.238 1.287.654 1.717 1.21l.396-.307zM13.51 3.65c-1.544-.524-3.384-.069-4.437 1.112l.373.333c.913-1.024 2.54-1.435 3.903-.972l.161-.473zM9.072 4.762a3.67 3.67 0 00-.942 2.15l.498.042a3.17 3.17 0 01.818-1.86l-.374-.332zm-.942 2.15a3.511 3.511 0 00.576 2.205l.417-.275a3.011 3.011 0 01-.495-1.888l-.498-.042zm.576 2.205a3.933 3.933 0 001.762 1.452l.19-.462a3.433 3.433 0 01-1.535-1.265l-.417.275zm1.762 1.452c.411.17.825.275 1.272.323l.054-.497a4.072 4.072 0 01-1.136-.288l-.19.462zm1.272.323c.421.047.845.019 1.253-.058l-.093-.492c-.368.07-.742.093-1.105.053l-.055.497zm1.253-.058c1.581-.296 2.902-1.542 3.148-3.047l-.493-.08c-.209 1.272-1.347 2.374-2.747 2.635l.092.492zm3.148-3.047c.033-.197.056-.402.056-.613h-.5c0 .174-.02.35-.05.532l.494.081zm.056-.611a.59.59 0 00-.003-.067l-.497.052v.011l.5.004zM17.9 17.22h-1.157v.5H17.9v-.5zm-.002 0l.005.5-.005-.5zm-.075.488l.156-.475-.156.475zm.078-.488v.5-.5zm.031-.001a2.93 2.93 0 01-.04.002l.019.5.044-.003-.023-.5zm.03-.012a.964.964 0 01-.068.017l.1.49c.034-.007.068-.015.103-.025l-.135-.482zm.015-.013a.529.529 0 01-.05.026l.206.456c.033-.015.066-.032.098-.051l-.254-.43zm-.018.011a3.16 3.16 0 01-.016.013l.322.383.02-.018-.326-.378zm-.003.01a.09.09 0 01.018-.019.185.185 0 01.016-.011c.004-.002.025-.016.056-.026a.249.249 0 01.318.177.248.248 0 01-.008.145.234.234 0 01-.02.043l-.427-.26a.252.252 0 00.173.38.226.226 0 00.117-.01.239.239 0 00.062-.029.405.405 0 00.095-.091l-.4-.3zm.006-.008a.273.273 0 01-.006.008l.4.299a.813.813 0 00.011-.015l-.405-.292zm.047-.051a.594.594 0 00-.021.02l.354.354.002-.003-.335-.371zm.322.382l.008-.006-.325-.38a.461.461 0 00-.012.01l.33.376zm-.343-.372a.498.498 0 01-.025.04l.407.29a.995.995 0 00.05-.077l-.432-.253zm-.004-.005a.45.45 0 01-.014.044l.468.175a.99.99 0 00.03-.092l-.484-.127zm-.006-.11c0 .061.002.11-.002.156l.5.035c.004-.071.003-.141.002-.198l-.5.008zm0-.078v.079l.5-.008v-.071h-.5zm0-1.017v1.017h.5v-1.017h-.5zm0-.09v.09h.5v-.089h-.5zm-.029-.692c.029.222.029.448.028.692l.5.001c0-.239.002-.497-.032-.757l-.496.064zm-.227-.72c.107.237.184.482.23.733l.491-.09a3.642 3.642 0 00-.265-.848l-.456.206zm-.284-.46c.11.15.207.308.289.47l.446-.225a3.844 3.844 0 00-.332-.54l-.403.296zm-.158-.2c.058.069.11.133.157.198l.406-.29a3.648 3.648 0 00-.18-.23l-.383.322zm-.025-.027l.033.036.366-.34a5.13 5.13 0 01-.03-.033l-.37.337zm0 0l.369-.337-.37.337zm.001.002l.365-.342-.365.341zm-.09-.094c.029.028.057.058.09.094l.365-.342a5.137 5.137 0 00-.108-.112l-.348.36zm-.407-.35c.144.107.278.223.404.348l.352-.355a4.194 4.194 0 00-.458-.395l-.298.402zm-.044-.036a.72.72 0 00.04.034l.305-.397-.002-.002a.938.938 0 01-.013-.011l-.33.376zm.023-.01a.196.196 0 01-.06-.02h.002a.335.335 0 01.014.011l.021.019.33-.376a.644.644 0 00-.069-.056.364.364 0 00-.156-.071l-.082.493zm.194-.444c-.004-.002.002.001.009.008l.013.012a.248.248 0 01-.001.357.25.25 0 01-.217.067l.086-.493a.254.254 0 00-.217.067.25.25 0 00-.038.313c.017.026.034.042.037.046a.256.256 0 00.04.033l.288-.41zm-.28.415l.004.002.265-.424-.004-.002-.265.424zm-.03-.02c.01.008.02.014.03.02l.265-.424-.027-.017-.269.422zm-.242-.14c.085.045.164.09.24.14l.271-.42a3.848 3.848 0 00-.275-.161l-.236.44zm-.486-.222c.168.065.33.138.486.222l.236-.441a4.769 4.769 0 00-.543-.248l-.18.467zm-.844-.199c.292.04.578.107.852.202l.163-.473a4.984 4.984 0 00-.947-.224l-.068.495zm-.792-.024c.279 0 .541 0 .802.025l.05-.498c-.29-.028-.579-.027-.853-.027l.002.5zm-.126 0h.127l-.002-.5h-.125v.5zm-2.838 0h2.838v-.5h-2.838v.5zm-1.216 0h1.216v-.5h-1.216v.5zm-.04 0h.04v-.5h-.04v.5zm-.777.025c.253-.024.507-.025.778-.025v-.5c-.267 0-.546 0-.827.028l.049.497zm-.847.204c.276-.095.562-.164.857-.205l-.069-.495a5.033 5.033 0 00-.951.228l.163.472zm-.537.253a4.18 4.18 0 01.545-.256l-.18-.466c-.21.08-.415.177-.61.286l.245.436zm-.231.14a3.63 3.63 0 01.228-.139l-.24-.439c-.091.05-.177.104-.26.157l.272.42zm-.032.022l.04-.029-.288-.408-.04.028.288.41zm0 0l-.288-.41v.001l.288.41zm0 0l-.289-.408.29.408zm-.107.079c.033-.026.068-.05.108-.08l-.29-.406c-.04.027-.084.06-.128.094l.31.392zm-.4.355c.122-.126.254-.243.398-.353l-.305-.396a4.152 4.152 0 00-.452.401l.36.348zm-.042.039a.803.803 0 00.04-.036l-.354-.354h.001l-.003.002-.012.01.328.378zm.002-.047a.208.208 0 01-.03.07l-.005.007a.246.246 0 01.013-.012l.02-.018-.328-.377c-.014.012-.041.035-.065.06a.452.452 0 00-.043.052.307.307 0 00-.05.111l.488.107zm-.42-.23l.01-.01.013-.01a.25.25 0 01.396.253l-.487-.112a.251.251 0 00.278.304.248.248 0 00.136-.065l.023-.023-.368-.337zm.376.33l.003-.003-.388-.317-.002.004.387.316zM7 13.842l.022-.027-.387-.317a1.958 1.958 0 01-.02.024l.385.32zm-.16.208a3.64 3.64 0 01.158-.207l-.381-.322c-.068.08-.129.16-.187.243l.41.286zm-.25.42a3.35 3.35 0 01.25-.42l-.41-.286a3.854 3.854 0 00-.286.481l.447.225zm-.221.72c.044-.25.12-.495.226-.73l-.456-.206c-.123.274-.21.558-.263.848l.493.088zm-.026.45c0-.158.008-.311.027-.462l-.495-.065a4.024 4.024 0 00-.032.527h.5zm0 .922v-.922h-.5v.922h.5zm0 .463v-.462h-.5v.462h.5zm0 .05v-.05h-.5v.047l.5.003zm.002.133a2.003 2.003 0 01-.002-.133l-.5-.003c0 .048 0 .106.003.166l.499-.03zm.008.003a.579.579 0 01-.016-.052l-.483.128a.975.975 0 00.03.097l.47-.173zm.008-.001a.383.383 0 01-.027-.04l-.43.255a.84.84 0 00.061.09l.396-.305zm-.015-.019a1.824 1.824 0 01-.015-.013l-.336.37.02.018.331-.375zm-.007 0a.088.088 0 01.017.014.196.196 0 01.015.016.23.23 0 01.037.06c.005.013.03.073.014.15a.25.25 0 01-.347.174l.211-.453a.255.255 0 00-.275.04.25.25 0 00-.078.134c-.017.077.009.137.014.15.016.037.037.062.041.067a.42.42 0 00.102.083l.249-.434zm.01.006l-.01-.005-.248.434.016.009.241-.438zm.053.038a.539.539 0 00-.023-.018l-.303.398a.043.043 0 00.003.002l.323-.382zm-.336.37l.008.008.333-.373-.012-.01-.329.376zm.333-.383a.672.672 0 01-.049-.024l-.239.439c.028.015.056.029.084.041l.204-.456zm.024.002a.777.777 0 01-.057-.014l-.137.48c.03.01.062.017.094.024l.1-.49zm.007-.004h-.044l-.026.498c.023.002.046.002.07.002v-.5zm.898 0h-.897l-.001.5h.898v-.5zm.449 0h-.45l.001.5h.449v-.5zm2.869 0H7.778v.5h2.869v-.5zm3.332 0h-3.332v.5h3.332v-.5zm2.764 0h-2.764v.5h2.764v-.5zm-10.667.385a.21.21 0 01-.029-.016.452.452 0 01.02.017l.33-.377a.872.872 0 00-.047-.038.34.34 0 00-.063-.04l-.21.454zm.279-.407l-.008-.007-.331.375.01.009.329-.377zm.01.008a.613.613 0 01-.01-.008c-.001-.001-.001-.001 0 0l-.33.377.043.033.297-.402zm.015.01l-.015-.01-.297.402a.71.71 0 01.009.006l.303-.397zm-.029-.018l-.002-.001-.24.438.003.002.24-.44zm-.215.136l-.194.158h.001c0 .002.001.002.002.003l.007.008.386-.317a.523.523 0 01-.006-.007l-.002-.002-.194.157zm.185-.167l.009.01c0 .001.014.017.026.04a.25.25 0 01-.12.346l-.2-.458a.25.25 0 00-.15.25c.005.053.026.09.03.098a.225.225 0 00.03.045c.01.011.02.02.023.025l.352-.356zm.037-1.906l.005-.032-.493-.082a3.427 3.427 0 00-.006.037l.494.077zm-.489-.111l-.005.03.493.084.006-.038-.494-.076zm.311-.981l-.02.041.452.215.02-.041-.452-.215zm.433.255l.018-.039-.45-.218-.021.045.453.212zm.45-.657l.002-.003-.003.004-.004.005-.016.014a.247.247 0 01-.039.028c-.006.003-.041.024-.092.03a.443.443 0 01-.135-.02.436.436 0 01-.128-.132.253.253 0 01.027-.24l.003-.005c.004-.004.004-.005-.002.004l-.028.033.368.337.045-.052.018-.022.003-.005.01-.014.014-.026a.247.247 0 00.015-.042c.001-.006.023-.077-.011-.158a.434.434 0 00-.128-.133.443.443 0 00-.136-.02.261.261 0 00-.092.031c-.021.013-.036.026-.038.027l-.016.016-.005.005-.005.005a.481.481 0 00-.01.01l.383.323zm-.028.033l.036-.043-.398-.303-.007.008.369.338zm-.01.012a1.99 1.99 0 01.017-.02l-.384-.32-.02.023.388.317zm2.272-1.65l-.038.004.059.497.043-.005-.064-.496zm.023.5a4.99 4.99 0 01.039-.004l-.06-.497-.042.006.063.496zm5.644-.004l.037.005.064-.497a5.702 5.702 0 00-.041-.005l-.06.497zm.098-.492l-.036-.004-.064.496.042.005.059-.497zm1.1.267l-.048-.017-.171.47.047.017.172-.47zm-.218.453l.045.016.174-.468a4.284 4.284 0 00-.05-.019l-.169.471zm.763.4l.004.002-.004-.003-.005-.004a.242.242 0 01-.05-.05c-.003-.004-.036-.044-.047-.108a.44.44 0 01.032-.17.437.437 0 01.14-.11c.064-.02.119-.008.124-.007a.243.243 0 01.034.01l.023.009.013.006.005.003-.005-.003a1.34 1.34 0 01-.04-.026l-.286.41a1.663 1.663 0 00.082.053l.005.003.014.007a.224.224 0 00.057.018c.005.001.059.014.124-.006a.437.437 0 00.14-.111.44.44 0 00.031-.17c-.01-.063-.043-.104-.046-.108-.017-.021-.033-.035-.034-.037a.22.22 0 00-.017-.013l-.006-.004-.005-.004a.657.657 0 00-.012-.008l-.271.42zm-.037-.025c.009.006.026.018.047.03l.251-.432-.011-.008-.287.41zm-.014-.009l.023.015.269-.422-.027-.017-.265.424zm1.801 1.93a1.543 1.543 0 01-.005-.032l-.494.076.006.04.493-.084zm-.499.047l.006.033.494-.077-.006-.038-.494.082zm.507 2.107l.006-.04-.494-.076-.006.033.494.083zm-.491-.102a.375.375 0 01-.003.022l.494.076.006-.044-.497-.054zm.474.134l.002-.003-.452-.215-.001.003.451.215zm-.112.156a.25.25 0 01-.008.012l-.006.008-.007.008-.003.004a.413.413 0 01.02-.018l-.33-.376a.845.845 0 00-.044.041.377.377 0 00-.05.061l.428.26zm-.37-.326a.535.535 0 01-.007.007l.326.378.01-.008-.329-.377zm.008-.008l-.007.008c-.002.002-.002.001 0 0l.329.377a.438.438 0 00.038-.038l-.36-.347zm.014-.014l-.014.014.36.347.008-.007-.354-.354zm-.025.03l-.001.001.405.292.003-.004-.407-.29zm.108.228l.132.212h.001l.003-.002a.72.72 0 00.01-.006l-.266-.424-.009.006a.121.121 0 01-.002.001l.131.213zm-.14-.206l.01-.006a.245.245 0 01.115-.037.25.25 0 01.232.125l-.434.248a.25.25 0 00.313.107c.023-.009.039-.02.043-.022a.415.415 0 00.027-.02l-.306-.395zm-.016 1.443c.73-.014 1.482-.477 1.616-1.206l-.491-.09c-.079.425-.563.785-1.134.796l.009.5zm1.616-1.206a2.99 2.99 0 00.034-.584l-.5.005c.002.183.002.338-.025.488l.491.091zm.034-.584v-.113h-.5v.118l.5-.005zm0-.113v-.862h-.5v.862h.5zm0-.862v-.112l-.5-.002v.114h.5zm0-.112c0-.161.002-.338-.014-.515l-.498.045c.013.15.013.302.012.468l.5.002zm-.014-.514c-.083-.978-.521-1.89-1.252-2.62l-.354.353c.654.653 1.035 1.456 1.108 2.31l.498-.043zm-1.252-2.62c-.687-.688-1.644-1.18-2.656-1.366l-.09.492c.919.169 1.781.615 2.392 1.226l.354-.353zm-2.656-1.366c-.522-.097-1.036-.1-1.537-.1v.5c.503 0 .975.004 1.446.092l.091-.492zm-1.537-.1H12.32v.5h1.785v-.5zm-1.785 0h-1.896v.5h1.896v-.5zm-1.896 0l-.25-.002-.005.5.255.001v-.5zm-.25-.002a9.138 9.138 0 00-.931.024l.047.498c.284-.027.575-.025.88-.022l.003-.5zm-.932.025a5.815 5.815 0 00-1.633.395l.187.464a5.31 5.31 0 011.495-.362l-.049-.497zm-1.633.395a5.02 5.02 0 00-1.277.76l.316.388a4.51 4.51 0 011.148-.684l-.187-.464zm-1.277.761c-.76.622-1.31 1.48-1.493 2.394l.49.099c.158-.788.638-1.549 1.32-2.106l-.317-.387zM4.84 14.768c-.098.49-.092.981-.088 1.443l.5-.005c-.004-.47-.007-.91.078-1.34l-.49-.098zm-.088 1.443l.001.288h.5l-.001-.293-.5.005zm.001.288v.658h.5v-.658h-.5zm0 .658c0 .556.338 1.11.916 1.355l.195-.46a.985.985 0 01-.61-.895h-.5zm.916 1.355c.258.109.525.159.806.159v-.5c-.22 0-.42-.039-.611-.12l-.195.46zm.806.159h.274v-.5h-.274v.5zm.274 0h1.107v-.5H6.749v.5zm1.107 0h1.667v-.5H7.856v.5zm1.667 0h1.975v-.5H9.523v.5zm1.975 0h2.052v-.5h-2.052v.5zm2.052 0h1.897v-.5H13.55v.5zm1.897 0h1.488v-.5h-1.488v.5zm1.488 0h.852v-.5h-.852v.5zm.852 0h.1v-.5h-.1v.5zm.096 0h.02l-.005-.5h-.008l-.007.5zm.021 0h.005l-.008-.5h-.003l.006.5zm.005 0h.006l-.01-.5h-.004l.008.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AppIconsIcon;
/* prettier-ignore-end */
