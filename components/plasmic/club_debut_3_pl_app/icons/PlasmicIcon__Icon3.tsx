// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 17"}
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
          "M12.047 4.67c.015-.124.023-.247.023-.372v-.004c0-.124-.008-.248-.024-.373a3.077 3.077 0 00-.187-.662 3.247 3.247 0 00-.371-.615 3.046 3.046 0 00-.501-.486l-.023-.017a3.296 3.296 0 00-.633-.354 3.46 3.46 0 00-.7-.183 3.507 3.507 0 00-.78.001 3.404 3.404 0 00-.687.18 3.46 3.46 0 00-.51.269l-.13.088a3.055 3.055 0 00-.48.452l-.024.03a3.098 3.098 0 00-.386.63 3.127 3.127 0 00-.19.673c-.03.25-.03.5 0 .75.037.227.1.448.187.662a3.25 3.25 0 00.372.615l.042.05a3.019 3.019 0 00.61.54c.159.103.328.192.505.267.225.085.46.146.699.183.26.028.52.028.78-.001.235-.036.465-.097.687-.18a3.457 3.457 0 00.64-.357c.018-.014.036-.027.052-.041a3.073 3.073 0 00.427-.411l.026-.03.018-.022a3.092 3.092 0 00.368-.609c.089-.217.152-.442.19-.673zm.01-.057c-.002.005-.002.01-.003.016l.002-.016zM9.57 7.003zm-.652 0zm-2.485-2.39zm0-.628zm2.485-2.39zm.652 0zm2.485 2.39l-.004-.03.004.03zm.94.274a3.493 3.493 0 00-.675-2.021A3.837 3.837 0 0010.505.902c-1.44-.51-3.156-.063-4.13 1.076a3.612 3.612 0 00-.87 2.073 3.485 3.485 0 00.53 2.115A3.687 3.687 0 007.667 7.57c.385.166.772.269 1.192.316.388.045.783.018 1.167-.058 1.476-.287 2.693-1.5 2.919-2.936a3.809 3.809 0 00.05-.633zm.79 10.683h1.147l.042-.001a.867.867 0 00.084-.022.75.75 0 00.074-.04l.018-.015c-.006.009.016-.006.034-.031l.008-.012a.26.26 0 01.012-.012l-.01.01a.821.821 0 00.037-.06.756.756 0 00.022-.07c.004-.062.003-.123.002-.183l-.001-.078v-1.143c0-.25 0-.5-.03-.749a3.621 3.621 0 00-.245-.817 3.756 3.756 0 00-.473-.743l-.032-.036a3.95 3.95 0 00-.525-.49.608.608 0 01-.029-.024c-.03-.029-.072-.066-.1-.07l.01.007a4.517 4.517 0 00-1.687-.64c-.273-.028-.545-.027-.819-.026H7.148c-.265 0-.53 0-.794.027-.307.044-.607.12-.895.223a4.37 4.37 0 00-.814.433l-.04.03a3.934 3.934 0 00-.536.48l-.027.024c-.031.028-.072.066-.077.091 0 .002.003-.002.009-.008L3.97 11a3.768 3.768 0 00-.457.724 3.572 3.572 0 00-.242.816c-.021.17-.029.34-.029.51v1.482c0 .051 0 .103.002.155a.88.88 0 00.024.077.666.666 0 00.043.067l.018.017c-.01-.006.006.014.034.03a.406.406 0 01.026.018l-.01-.008a.897.897 0 00.065.034.95.95 0 00.075.019l.057.001c.297.002.593.001.889 0h9.32zM3.38 14.888a.307.307 0 00-.05-.04.45.45 0 00.047.038l.003.002zm-.095-.086zm-.025-2.184zm.292-.977l-.02.043.02-.043zm.422-.644a.33.33 0 00.04-.05 2.491 2.491 0 00-.04.05zm2.472-1.286zm5.608 0zm1.071.267l-.047-.017.047.017zm.706.385zm1.408 2.257l-.006-.037.006.037zm-.044 2.198a.297.297 0 00-.044.046l.009-.008a.369.369 0 00.023-.024l.01-.01.002-.004zm-.094.087l.012-.008-.012.008zm-.16 1.02c.645-.012 1.256-.439 1.362-1.035.032-.184.03-.37.029-.554v-1.127c0-.17.001-.34-.013-.509a4.157 4.157 0 00-1.168-2.548 4.74 4.74 0 00-2.5-1.34c-.49-.095-.979-.1-1.476-.1H7.531l-.25-.001a8.35 8.35 0 00-.896.024 5.321 5.321 0 00-1.548.392 4.61 4.61 0 00-1.2.747c-.715.609-1.224 1.446-1.393 2.325-.09.476-.086.958-.082 1.44l.001.3v.68c0 .472.277.95.756 1.162.222.098.454.144.701.144h11.321z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12.07 4.298h.25v-.49l-.396.288.146.202zm-.023.372l.247.04.002-.01-.249-.03zm.023-.372l-.25-.001-.003.493.4-.29-.147-.202zm0-.004l.25.004v-.004h-.25zm-.024-.373l.249-.03-.002-.01-.247.04zm-.187-.662l.232-.094-.005-.01-.227.104zm-.28-.49l.206-.143-.002-.003-.203.146zm-.091-.125l.197-.153-.004-.005-.193.158zm-.043-.05l-.19.162.003.003.188-.165zm-.203-.215l-.173.18.173-.18zm-.224-.196l.157-.195-.006-.004-.15.2zm-.031-.024l.154-.197-.154.197zm-.023-.018l.152-.198-.006-.005-.146.203zm-.128-.087l-.136.21.003.002.133-.212zm-.505-.267l.097-.23-.009-.004-.088.234zm-.7-.183l.039-.247-.01-.001-.028.248zm-.78.001l-.027-.248-.01.001.038.247zm-.687.18l-.088-.234-.01.004.098.23zm-.51.269l-.135-.21-.003.002.138.208zm-.13.088L7.38 1.94l-.005.004.15.2zm-.052.041l.155.196.003-.002-.158-.194zm-.223.196l.173.18-.173-.18zm-.204.215l-.188-.165-.006.007.194.158zm-.025.03l.19.162-.19-.162zM7 2.646l-.192-.16-.005.007.197.153zm-.09.123l.205.143.001-.002-.206-.141zm-.278.486l-.227-.104-.004.01.231.094zm-.19.672l-.247-.04v.01l.247.03zm.001.75l-.248.03.001.011.247-.04zm.187.662l-.231.094.004.01.227-.104zm.28.49l-.206.142.003.004.203-.146zm.092.125l-.198.153.004.005.194-.158zm.042.05l.19-.162-.002-.003-.188.165zm.204.215l-.174.18.174-.18zm.223.196l-.157.194.007.005.15-.2zm.032.024l.154-.196-.154.196zm.022.018l-.152.198.006.005.146-.203zm.128.087l.136-.21-.002-.002-.134.212zm.506.267l-.098.23.01.004.088-.234zm.699.183l-.038.247.01.001.028-.248zm.78-.001l.028.248.01-.001-.038-.247zm.687-.18l.088.234.01-.004-.098-.23zm.51-.269l.135.21.003-.002-.138-.208zm.13-.088l.146.203.005-.004-.151-.2zm.052-.041l-.155-.196-.003.002.158.194zm.224-.196l-.173-.18.173.18zm.203-.215l.189.165.005-.007-.194-.158zm.026-.03l-.19-.162.19.162zm.018-.022l.192.16.006-.007-.198-.153zm.09-.123l-.204-.143-.002.002.207.141zm.278-.486l.228.104.004-.01-.232-.094zm.2-.73l.246.036-.494-.074.247.038zm-.003.016l-.248-.037.495.074-.247-.037zM9.57 7.002l-.035-.247.068.495-.033-.248zm.031-.004l.035.248-.067-.496.032.248zm-.683.004l-.034.248.07-.495-.036.247zM8.902 7l.034-.248-.068.496L8.902 7zM6.434 4.613l.247-.038-.494.073.247-.035zm.005.03l-.248.037.495-.073-.247.035zm-.005-.658l-.247-.036.494.074-.247-.038zm.003-.016l.247.037-.495-.074.248.037zm2.482-2.373l.035.247-.068-.495.033.248zm-.03.004l-.036-.248.068.496-.033-.248zm.682-.004l.034-.248-.069.495.035-.247zm.017.002l-.034.248.069-.496-.035.248zm2.468 2.387l-.247.038.495-.073-.248.035zm-.004-.03l.247-.037-.495.073.248-.035zm.943.304l-.25.004v.01l.001.011.25-.025zm-.673-2.021l-.201.149.2-.149zM10.505.902l-.084.235.084-.235zm-4.13 1.076l-.19-.162.19.162zm-.87 2.073l-.25-.02.25.02zm.53 2.115l-.212.133.212-.133zM7.667 7.57l-.1.23.1-.23zm1.192.316l.028-.248-.028.248zm1.167-.058l-.047-.245.047.245zm2.919-2.936l-.247-.04.247.04zm.052-.592l-.25-.002V4.3h.25zm1.934 10.642v.25h.003l-.003-.25zm0 0l.004.25.077-.486-.08.236zm0 0v-.25l-.08.487.08-.237zm.002 0v.25h.01l-.01-.25zm.042-.001l.012.25.02-.002.019-.004-.051-.244zm.084-.022l.07.24.02-.005.017-.009-.107-.226zm.074-.04l.132.213.017-.01.016-.015-.165-.188zm.052-.046l.203.145-.203-.145zm.02-.024l.171.182-.338-.368.167.186zm.027-.05l.218.122.01-.019.008-.02-.236-.084zm.022-.07l.242.06.005-.022.002-.022-.25-.017zm.002-.183l.25-.004-.25.004zm-.001-1.221h-.25.25zm-.03-.749l.249-.03-.002-.013-.247.043zm-.245-.817l.23-.1-.005-.009-.225.109zm-.306-.522l-.207.141.002.003.205-.144zm-.167-.22l.194-.158-.008-.009-.186.166zm-.032-.037l-.189.165.189-.165zm0 0l.188-.165-.002-.001-.186.166zm0 0l.186-.166v-.001l-.187.167zm-.1-.107l-.18.174.003.002.178-.176zm-.426-.383l-.156.195.003.003.153-.198zm-.028-.024l.169-.185-.169.185zm-.1-.07l-.044.245h.002l.042-.246zm.006.005l.136-.21-.136.21zm-.029-.019l-.14.207.002.001.138-.208zm-.255-.156l.122-.218-.122.218zm-.51-.242l.094-.232-.009-.003-.085.235zm-.89-.22l.036-.248-.01-.001-.026.248zm-.818-.027l.001.25v-.25zm-4.177 0v.25-.25zm-.794.027l-.026-.25-.01.002.036.248zm-.895.223l-.085-.235-.009.003.094.232zm-.572.28l.124.217.002-.001-.126-.216zm-.242.153l-.14-.208-.009.007.15.2zm-.04.03l-.147-.203-.004.003.151.2zm0 0l.15.199.002-.001-.152-.199zm0 0l.15.2v-.001l-.15-.2zm-.116.09l.156.194.003-.002-.16-.193zm-.42.389l.18.173.003-.003-.183-.17zm-.027.025l-.168-.185.168.185zm-.077.091l.244.054v-.003l-.244-.05zM3.97 11l.197.154L3.97 11zm-.02.027l.194.157v-.002l-.195-.155zm-.171.232l-.208-.14.208.14zm-.266.466l-.225-.109-.004.01.23.099zm-.242.815l-.246-.043-.002.011.248.032zm-.029 1.992l-.25-.002.25.002zm.002.155l-.25.014.002.024.006.023.242-.061zm.024.077l-.236.083.007.02.011.02.218-.123zm.043.067l-.2.15.012.017.016.014.172-.18zm.052.048l-.128.214.128-.214zm.025.018l-.166.187.337-.37-.17.183zm.056.025l-.106.226.017.008.018.005.071-.24zm.075.019l-.051.244.018.004.02.001.013-.25zm.057.001l.001-.25v.25zm.889 0v.25-.25zm-1.127-.086l.184-.17-.008-.008-.008-.007-.168.185zm0 0l-.185.168.008.009.008.007.169-.184zm.025.02l.153-.197-.153.198zm-.08-.074l.198-.154-.122-.156-.179.082.104.228zm.01.01l-.18.175.376-.329-.196.155zm-.034-2.194l-.248-.037.494.078-.246-.04zm.005-.035l.247.037-.494-.076.247.04zm.287-.942l.228.104-.455-.21.227.106zm-.02.043l-.228-.103.456.207-.228-.104zm.481-.736l-.194-.158-.008.01.202.148zm-.021.026l.182.171.006-.006-.188-.165zm0 0l-.183-.17-.007.006-.006.008.196.156zm2.454-1.263l.033.248-.064-.496.03.248zm-.04.006l-.033-.248.063.496-.03-.248zm5.648-.006l.031-.248-.064.496.033-.248zm.039.005l-.03.249.063-.496-.033.247zm1.032.262l-.089.234.18-.467-.09.233zm-.047-.017l.088-.235-.177.468.09-.233zm.806.438l.14-.207-.01-.006-.13.213zm-.029-.02l.148-.201-.01-.007-.138.209zm1.384 2.241l-.247.04.494-.077-.247.037zm-.006-.037l.247-.04-.494.077.247-.037zm-.073 2.273l.168.184.009-.008-.177-.176zm0 0l-.169-.185-.008.008.177.177zm.023-.024l-.184-.17.184.17zm-.082.073l-.137-.21-.194.126.111.204.22-.12zm.012-.008l.157.194-.294-.403.137.209zm-.172 1.028l.005.25-.005-.25zm1.362-1.035l-.247-.044.247.044zm.029-.554l-.25.002.25-.002zm0-1.127l-.25-.001h.25zm-.013-.509l-.25.02v.002l.25-.022zm-1.168-2.548l-.18.173.18-.173zm-2.5-1.34l-.047.246.048-.246zm-5.37-.101l-.003.25.002-.25zm-.896.024l-.025-.248.025.248zm-1.548.392l.097.23-.097-.23zm-1.2.747l-.163-.19.162.19zm-1.393 2.325L2 12.152l.245.047zm-.082 1.44l.25-.003-.25.002zm.757 2.142l.1-.229-.1.229zm11.998.144l.004-.25h-.004v.25zm.015 0l.003.25-.003-.25zm.004 0l-.004-.25.004.25zM11.82 4.298c0 .114-.007.228-.02.342l.495.06c.017-.133.025-.266.025-.402h-.5zm.397.203l-.293-.405.293.405zm-.397-.21v.006l.5.003v-.002l-.5-.007zm-.022-.34c.014.116.022.23.022.344l.5-.001c0-.135-.009-.27-.025-.403l-.497.06zm-.17-.597c.08.197.138.4.172.608l.493-.081a3.326 3.326 0 00-.202-.716l-.463.189zm-.254-.443c.1.144.185.295.258.453l.454-.21a3.505 3.505 0 00-.3-.527l-.412.284zm-.084-.113c.029.036.056.074.087.117l.406-.292a4.334 4.334 0 00-.098-.132l-.395.307zm-.032-.039l.037.044.386-.317a2.06 2.06 0 00-.048-.057l-.375.33zm-.19-.2c.066.063.13.13.187.197l.38-.324a3.284 3.284 0 00-.22-.233l-.346.36zm-.207-.181c.073.058.143.119.208.181l.346-.36a3.711 3.711 0 00-.24-.21l-.314.389zm-.029-.023l.035.028.302-.4-.028-.021-.309.393zm-.02-.016l.02.016.309-.393a2.541 2.541 0 00-.025-.02l-.304.397zm-.11-.073c.038.023.076.05.116.078l.292-.406a2.789 2.789 0 00-.14-.096l-.267.424zm-.469-.249c.164.07.32.152.467.247l.272-.42a3.554 3.554 0 00-.544-.287l-.195.46zm-.64-.165c.224.034.441.09.65.169l.176-.468a3.71 3.71 0 00-.75-.196l-.075.495zm-.713.002c.24-.028.483-.028.724-.001l.055-.497a3.757 3.757 0 00-.835 0l.056.498zm-.628.165c.207-.077.42-.134.637-.167l-.075-.494c-.253.039-.5.104-.738.193l.176.468zm-.463.245c.15-.095.307-.178.474-.249l-.197-.46a3.71 3.71 0 00-.547.289l.27.42zm-.118.081c.037-.027.077-.053.121-.083l-.276-.416-.137.093.292.406zm-.041.032l.046-.035-.302-.4c-.018.015-.04.03-.06.047l.316.388zm-.208.182a2.87 2.87 0 01.205-.18l-.31-.392a3.306 3.306 0 00-.242.212l.347.36zm-.189.2a3.17 3.17 0 01.189-.2l-.347-.36c-.077.074-.15.152-.218.23l.376.33zm-.023.027l.029-.034-.388-.316a2.012 2.012 0 01-.022.027l.381.323zm-.016.02l.016-.02-.381-.323a3.375 3.375 0 00-.02.023l.385.32zm-.077.104c.024-.036.052-.072.082-.11l-.395-.307a2.693 2.693 0 00-.1.135l.413.282zm-.257.449a2.87 2.87 0 01.256-.447l-.41-.286a3.348 3.348 0 00-.3.525l.454.208zm-.17.61c.035-.214.093-.421.174-.62l-.462-.189a3.377 3.377 0 00-.205.726l.493.082zm.002.678a2.87 2.87 0 010-.69l-.497-.06a3.37 3.37 0 00.001.81l.496-.06zm.17.597a2.83 2.83 0 01-.171-.607l-.494.081c.04.245.109.484.203.715l.463-.189zm.254.443a3 3 0 01-.258-.453l-.454.21a3.5 3.5 0 00.301.527l.411-.284zM7.2 5.8a3.854 3.854 0 01-.086-.117l-.406.292c.03.041.062.087.097.132L7.2 5.8zm.033.039a1.622 1.622 0 01-.037-.044l-.387.317.048.057.376-.33zm.189.2a2.772 2.772 0 01-.187-.197l-.38.324c.07.082.144.16.22.233l.347-.36zm.207.181a3.204 3.204 0 01-.207-.181l-.347.36a3.7 3.7 0 00.24.21l.314-.389zm.029.023l-.035-.028-.301.4.028.021.308-.393zm.02.016l-.02-.016-.308.393.024.02.305-.397zm.11.073a2.29 2.29 0 01-.116-.078l-.292.406c.044.031.092.065.141.095l.267-.423zm.469.249a3.048 3.048 0 01-.467-.247l-.272.42c.172.111.355.207.544.287l.195-.46zm.64.165a3.208 3.208 0 01-.649-.169l-.177.468c.242.091.494.156.75.196l.076-.495zm.714-.002a3.257 3.257 0 01-.725.001l-.055.497c.278.03.558.03.836 0l-.056-.498zm.627-.165c-.206.077-.42.133-.637.167l.075.494c.253-.039.5-.104.738-.193l-.176-.468zm.463-.245c-.15.095-.307.178-.473.249l.196.46c.19-.081.373-.177.547-.289l-.27-.42zm.119-.081a3.891 3.891 0 01-.122.083l.276.416.138-.093-.292-.406zm.04-.032l-.045.035.302.4.059-.047-.316-.388zm.209-.182a2.815 2.815 0 01-.206.18l.31.392c.084-.066.166-.139.242-.212l-.346-.36zm.188-.2c-.061.07-.124.138-.188.2l.346.36c.078-.074.15-.152.219-.23l-.377-.33zm.023-.027l-.028.034.387.316a2.39 2.39 0 01.023-.027l-.382-.323zm.017-.02a1.38 1.38 0 01-.017.02l.382.323.02-.023-.385-.32zm.076-.104a2.179 2.179 0 01-.081.11l.395.307a2.67 2.67 0 00.1-.135l-.414-.282zm.257-.449a2.847 2.847 0 01-.255.447l.41.286c.115-.166.216-.342.3-.525l-.455-.208zm.17-.61a2.9 2.9 0 01-.174.62l.463.189c.096-.235.164-.479.205-.727l-.493-.082zm.009-.053l-.002.015.494.075.002-.017-.494-.073zm.492.089l.002-.014-.494-.076-.002.017.494.073zM9.607 7.25l.028-.004-.065-.496-.034.005.07.495zm-.04-.5l-.028.004.065.496.033-.004-.07-.495zm-.614.005l-.016-.003-.07.496.018.002.068-.495zm-.084.493l.015.002.07-.495-.018-.003-.067.496zM6.187 4.65l.004.026.495-.07a2.699 2.699 0 00-.005-.032l-.494.076zm.499-.046a2.838 2.838 0 01-.004-.027l-.495.07.004.032.495-.075zm-.004-.583l.002-.015-.495-.075-.002.017.495.073zm-.493-.089l-.002.014.494.076.003-.017-.495-.073zm2.695-2.585a2.4 2.4 0 01-.028.004l.065.496a3.01 3.01 0 00.033-.005l-.07-.495zm.039.5l.029-.004-.066-.496a4.076 4.076 0 00-.033.004l.07.495zm.615-.005l.015.003.07-.496-.018-.002-.067.495zm.084-.493l-.015-.002-.07.495.017.003.068-.496zm2.681 2.597a3.584 3.584 0 01-.004-.027l-.495.07.005.033.494-.076zm-.498.046l.004.027.495-.07a3.42 3.42 0 00-.005-.032l-.494.075zm1.44.262a3.744 3.744 0 00-.723-2.166l-.401.298c.401.54.614 1.21.624 1.876l.5-.008zm-.723-2.166A4.087 4.087 0 0010.588.666l-.167.471a3.587 3.587 0 011.7 1.25l.401-.298zM10.588.666c-1.534-.544-3.36-.07-4.402 1.15l.38.325C7.47 1.082 9.077.66 10.42 1.137l.167-.471zm-4.403 1.15a3.862 3.862 0 00-.93 2.215l.498.04a3.362 3.362 0 01.813-1.93l-.38-.325zm-.93 2.215a3.735 3.735 0 00.568 2.268l.423-.267a3.235 3.235 0 01-.493-1.962l-.498-.04zm.568 2.268a3.937 3.937 0 001.745 1.5l.198-.458a3.437 3.437 0 01-1.52-1.309l-.423.267zm1.745 1.5c.408.177.82.286 1.263.336l.056-.497a3.883 3.883 0 01-1.122-.297l-.197.459zm1.262.336c.42.048.84.018 1.245-.061l-.097-.49a3.562 3.562 0 01-1.09.054l-.058.497zm1.244-.061c1.573-.307 2.875-1.597 3.118-3.144l-.494-.077c-.208 1.325-1.34 2.461-2.72 2.73l.096.49zm3.117-3.144a4.05 4.05 0 00.056-.63h-.5c0 .18-.02.364-.05.553l.495.077zm.056-.629c0-.022 0-.044-.003-.067l-.498.05.001.014.5.003zm1.684 10.391h-1.145v.5h1.145v-.5zm-.002 0l.005.5-.005-.5zm-.077.487l.16-.473-.16.473zm.08-.487v.5-.5zm.03-.001l-.039.002.02.5.044-.003-.025-.5zm.027-.011a.875.875 0 01-.066.016l.103.49a1.37 1.37 0 00.104-.027l-.141-.48zm.013-.013a.507.507 0 01-.05.026l.214.452a.99.99 0 00.098-.053l-.262-.425zm-.019.011a.646.646 0 01-.015.013l.33.376.02-.018-.335-.371zm-.001.01a.176.176 0 01.033-.03.248.248 0 01.352.332l-.432-.252a.266.266 0 00-.021.045.25.25 0 00.38.289.41.41 0 00.094-.094l-.406-.29zm.005-.009l-.005.008.406.291.01-.015-.41-.284zm.046-.052a.476.476 0 00-.02.021l.36.346.003-.003-.342-.364zm.33.376l.008-.007-.333-.373a.799.799 0 00-.011.01l.337.37zm-.349-.367a.54.54 0 01-.025.041l.412.282a1.03 1.03 0 00.05-.078l-.437-.245zm-.003-.009a.527.527 0 01-.014.047l.47.168c.011-.03.02-.061.029-.093l-.485-.122zm-.005-.118c0 .063.001.114-.002.162l.499.034c.005-.073.004-.144.003-.203l-.5.007zm-.001-.08v.08l.5-.007v-.074h-.5zm0-1.052v1.051h.5v-1.051h-.5zm0-.093v.093h.5v-.092h-.5zm-.028-.717c.029.23.028.465.028.717l.5.001c0-.247.001-.513-.032-.78l-.496.062zm-.226-.749c.106.246.183.5.228.76l.493-.085a3.87 3.87 0 00-.262-.873l-.459.198zm-.282-.477a3.5 3.5 0 01.287.487l.45-.218a4.007 4.007 0 00-.328-.557l-.409.288zm-.157-.208c.057.071.11.138.155.205l.413-.282a3.746 3.746 0 00-.179-.237l-.389.314zm-.025-.028l.032.037.374-.332a3.518 3.518 0 01-.03-.035l-.377.33zm0 0l.376-.33-.377.33zm0 0l.374-.331-.374.332zm-.089-.096c.03.03.057.06.09.098l.373-.334c-.032-.035-.069-.076-.108-.116l-.355.352zm-.402-.361c.143.11.275.23.4.359l.36-.347a4.204 4.204 0 00-.454-.408l-.306.396zm-.044-.038l.04.035.313-.39s.001 0 0 0l-.002-.002-.013-.012-.338.37zm.027-.009a.198.198 0 01-.057-.019l-.005-.003a.766.766 0 01.034.03l.339-.368c-.014-.012-.04-.037-.068-.058-.017-.013-.077-.06-.158-.074l-.085.492zm.199-.44l.01.008a.2.2 0 01.013.012c.003.004.019.02.034.045a.25.25 0 01-.258.375l.09-.492a.251.251 0 00-.26.376.254.254 0 00.05.06c.011.01.022.017.026.02l.295-.404zm-.288.41a.056.056 0 00.004.002l.273-.42a.057.057 0 00-.004-.002l-.273.42zm-.03-.02l.03.02.273-.42a1.85 1.85 0 01-.027-.017l-.276.416zm-.239-.146c.084.046.162.093.237.144l.28-.414a4.07 4.07 0 00-.273-.167l-.244.437zm-.48-.229c.166.067.326.143.48.229l.244-.437a4.651 4.651 0 00-.538-.256l-.187.464zm-.833-.205c.288.041.57.11.84.208l.17-.47a4.768 4.768 0 00-.939-.233l-.071.495zm-.782-.024c.276-.001.535-.002.792.025l.051-.497a7.562 7.562 0 00-.844-.028l.001.5zm-.126 0h.126l-.001-.5H11.2v.5zm-2.81 0h2.81v-.5H8.39v.5zm-1.203 0H8.39v-.5H7.187v.5zm-.039 0h.039v-.5h-.039v.5zm-.768.025c.249-.025.5-.025.768-.025v-.5c-.263 0-.54 0-.82.028l.052.497zm-.836.21a4.32 4.32 0 01.846-.21l-.072-.496c-.324.047-.64.126-.944.236l.17.47zm-.53.261c.17-.1.351-.188.538-.264l-.187-.464a4.606 4.606 0 00-.605.297l.253.431zm-.23.144c.078-.052.152-.1.227-.143l-.248-.434a4.74 4.74 0 00-.257.162l.279.415zm-.031.024l.04-.03-.297-.402-.038.028.295.404zm.004-.003l-.303-.398.303.398zm-.002.001l-.3-.4.3.4zm-.107.083c.032-.027.066-.052.107-.082l-.3-.401c-.038.029-.083.062-.126.097l.319.386zm-.396.367c.12-.13.251-.25.393-.365l-.313-.39c-.16.129-.309.266-.446.415l.366.34zm-.042.04l.04-.037-.362-.346a.019.019 0 00.001 0l-.003.002a.578.578 0 01-.012.011l.336.37zm0-.043a.203.203 0 01-.028.068l-.004.006a.29.29 0 01.032-.03l-.336-.37c-.014.012-.04.036-.064.061a.454.454 0 00-.043.053.31.31 0 00-.047.11l.49.102zm-.424-.224l.009-.009a.241.241 0 01.135-.065.25.25 0 01.279.3l-.489-.106a.25.25 0 00.358.277c.024-.012.041-.026.046-.03a.264.264 0 00.015-.014l.023-.023-.376-.33zm.382.322l.003-.003-.394-.308-.003.003.394.308zm-.022.028l.022-.028-.394-.308a9.674 9.674 0 01-.02.025l.392.311zm-.158.216c.05-.075.101-.146.157-.214l-.389-.315a3.43 3.43 0 00-.184.25l.416.28zm-.248.435c.072-.15.154-.295.248-.435l-.416-.278a4.08 4.08 0 00-.283.496l.45.217zm-.221.749c.044-.26.12-.514.225-.758l-.459-.199a3.823 3.823 0 00-.26.872l.494.085zm-.026.469c0-.164.008-.324.027-.48l-.496-.063c-.023.183-.03.365-.03.543h.5zm0 .953v-.953h-.5v.953h.5zm0 .478v-.478h-.5v.478h.5zm0 .052v-.052h-.5v.049l.5.003zm.002.138a2.173 2.173 0 01-.002-.138l-.5-.004c0 .05 0 .11.003.17l.5-.028zm.01.009a.634.634 0 01-.017-.056l-.485.123c.008.032.018.066.03.099l.471-.166zm.008.002a.415.415 0 01-.027-.043l-.435.247a.915.915 0 00.06.093l.402-.298zm-.014-.02a1.223 1.223 0 01-.014-.013l-.345.362.02.02.34-.368zm-.007 0a.192.192 0 01.031.03c.002.003.021.026.036.061.005.013.028.07.013.143a.25.25 0 01-.352.175l.219-.45a.256.256 0 00-.161-.02.25.25 0 00-.183.34c.015.036.035.06.04.066a.419.419 0 00.101.085l.256-.43zm.009.006a.376.376 0 01-.01-.005l-.255.43.016.009.249-.434zm.054.04a.55.55 0 00-.023-.019l-.311.392a.055.055 0 01.002.002l.332-.374zm-.344.363l.008.008.34-.366-.01-.01-.338.368zm.34-.377a.665.665 0 01-.048-.025l-.247.435c.028.016.055.03.083.043l.212-.453zm.021.001a.75.75 0 01-.056-.014l-.142.48.095.023.103-.489zm.005-.004h-.043l-.027.498c.023.002.046.002.07.002v-.5zm.888 0c-.296.001-.591.002-.887 0l-.002.5c.298.002.594.001.89 0v-.5zm.445 0h-.445v.5h.445v-.5zm2.84 0H4.91v.5h2.84v-.5zm3.3 0h-3.3v.5h3.3v-.5zm2.736 0H11.05v.5h2.736v-.5zm-10.566.38a.198.198 0 01-.026-.015l-.003-.002a.43.43 0 01.02.017l.337-.369a.875.875 0 00-.046-.04.341.341 0 00-.063-.04l-.219.45zm.287-.401l-.008-.007-.339.367.01.01.337-.37zm.016.016l-.369.338.369-.338zm-.006-.008l-.01-.008c-.001-.001-.001-.001 0 0l-.337.37.042.034.305-.396zm.015.011l-.015-.011-.305.396.009.007.311-.392zm-.029-.02h-.002l-.25.433.005.002.247-.435zm-.218.132l-.197.153v.001l.002.003.007.008.393-.309a1.225 1.225 0 01-.006-.007l-.002-.003-.197.154zm.188-.163l.009.01c0 .001.013.016.025.04a.25.25 0 01-.119.34l-.207-.455a.25.25 0 00-.146.248c.004.05.023.087.028.095.012.024.026.041.028.044l.023.026.36-.348zm.034-1.984l.005-.032-.494-.08a4.696 4.696 0 00-.006.038l.495.074zm-.49-.109a2.476 2.476 0 01-.004.032l.493.08.006-.038-.494-.074zm.308-1.01l-.02.044.455.207.02-.043-.455-.207zm.436.25a3.11 3.11 0 01.018-.04l-.454-.21-.02.045.456.205zm.446-.68l.003-.004-.003.003-.004.005-.016.016c-.002.001-.017.015-.038.028-.007.004-.043.026-.096.033a.442.442 0 01-.141-.022.434.434 0 01-.125-.134c-.03-.079-.01-.147-.01-.152a.245.245 0 01.04-.085l-.003.004-.028.034.376.33a1.561 1.561 0 00.06-.076l.004-.005.01-.015A.243.243 0 004.263 11c.001-.005.02-.073-.01-.151a.434.434 0 00-.125-.135.44.44 0 00-.141-.022c-.053.007-.09.03-.096.033a.242.242 0 00-.038.029c-.009.007-.015.014-.016.015l-.005.005-.004.005-.01.012.39.314zm-.027.033l.035-.044-.404-.295-.007.01.376.329zm-.006.006l-.365-.342.365.342zm-.003.006l.016-.021-.39-.312a2.696 2.696 0 00-.02.025l.394.308zm2.241-1.687a3.317 3.317 0 01-.037.005l.061.496.043-.006-.067-.495zm.027.5a4.42 4.42 0 01.038-.004l-.062-.497a4.575 4.575 0 00-.042.006l.066.495zm5.584-.004l.037.004.066-.495a5.17 5.17 0 00-.04-.006l-.063.497zm.1-.492a3.622 3.622 0 01-.035-.004l-.067.495.041.006.062-.497zm1.091.277l-.047-.018-.178.467.047.018.178-.467zm-.223.45l.044.016.18-.466a3.805 3.805 0 00-.05-.019l-.174.469zm.753.412l.004.002-.003-.002-.005-.004-.017-.014c-.001-.001-.017-.016-.033-.037-.003-.005-.034-.045-.043-.107a.44.44 0 01.03-.164.437.437 0 01.139-.113c.067-.022.123-.008.128-.007.017.003.03.008.036.01l.023.01a.245.245 0 01.018.01l-.005-.004a1.48 1.48 0 01-.038-.026l-.295.404a1.648 1.648 0 00.082.055l.005.003.013.007a.247.247 0 00.06.02c.004.001.06.015.128-.007a.437.437 0 00.14-.113.44.44 0 00.03-.164.241.241 0 00-.045-.107.242.242 0 00-.055-.055l-.005-.004a.312.312 0 00-.012-.008l-.28.415zm-.036-.025a.64.64 0 00.046.03l.26-.426a.15.15 0 01-.011-.008l-.295.403zm-.014-.01l.023.016.277-.417-.027-.017-.273.419zm1.791 2.008a3.15 3.15 0 01-.005-.033l-.494.073.006.04.493-.08zm-.499.043l.005.034.495-.074a2.476 2.476 0 00-.006-.04l-.494.08zm.38 2.367a.227.227 0 01-.018.027l-.003.004a.427.427 0 01.019-.018l-.338-.37a.886.886 0 00-.043.043.315.315 0 00-.048.062l.432.252zm-.375-.32c0 .002-.004.005-.008.008l.335.371.01-.009-.337-.37zm-.008.009l.354.353-.354-.353zm.016-.017l-.008.009c-.001.001-.001.001 0 0l.337.37a.399.399 0 00.038-.04L15 14.663zm.013-.014l-.013.014.367.34.008-.008-.362-.345zm-.024.03v.001l.41.284.004-.004-.413-.282zm.113.227l.136.21v-.001l.004-.002.009-.006-.274-.418-.009.005-.002.002.136.21zm-.145-.203l.01-.007c.001 0 .016-.011.037-.02a.25.25 0 01.317.11l-.439.24a.25.25 0 00.362.086.372.372 0 00.027-.02l-.314-.389zm-.01 1.473c.732-.014 1.472-.499 1.603-1.242l-.493-.086c-.08.45-.563.817-1.12.828l.01.5zm1.603-1.241c.037-.21.035-.42.033-.6l-.5.004a2.79 2.79 0 01-.026.508l.493.088zm.033-.6v-.117h-.5v.12l.5-.003zm0-.117v-.891h-.5v.89h.5zm0-.891v-.116l-.5-.002v.118h.5zm0-.116c0-.167.002-.349-.014-.531l-.498.043a5.4 5.4 0 01.012.486l.5.002zm-.014-.53a4.406 4.406 0 00-1.237-2.7l-.36.345a3.907 3.907 0 011.099 2.396l.498-.041zm-1.237-2.7A4.991 4.991 0 0012.7 8.566l-.095.49a4.49 4.49 0 012.366 1.268l.361-.346zM12.7 8.566c-.518-.1-1.028-.105-1.524-.105v.5c.498 0 .964.006 1.43.096l.094-.491zm-1.524-.105H9.408v.5h1.767v-.5zm-1.767 0H7.53v.5h1.877v-.5zm-1.877 0l-.248-.001-.005.5.253.001v-.5zm-.248-.001a8.465 8.465 0 00-.923.026l.05.497a7.97 7.97 0 01.868-.023l.005-.5zm-.924.026a5.57 5.57 0 00-1.62.41l.195.46c.473-.2.956-.32 1.476-.373l-.05-.497zm-1.62.41a4.88 4.88 0 00-1.265.786l.325.38a4.396 4.396 0 011.135-.706l-.194-.46zm-1.265.786c-.753.643-1.295 1.529-1.475 2.47l.49.093c.158-.819.635-1.607 1.31-2.182l-.325-.38zM2 12.153c-.096.503-.091 1.01-.087 1.487l.5-.004c-.004-.486-.008-.942.078-1.39L2 12.152zm-.087 1.487l.001.298h.5l-.001-.302-.5.004zm.001.298v.68h.5v-.68h-.5zm0 .68c0 .566.33 1.138.905 1.392l.202-.458a1.029 1.029 0 01-.607-.934h-.5zm.905 1.391c.256.114.522.166.802.166v-.5c-.215 0-.412-.04-.6-.123l-.202.457zm.802.166h.271v-.5h-.27v.5zm.271 0h1.096v-.5H3.891v.5zm1.096 0h1.65v-.5h-1.65v.5zm1.65 0h1.956v-.5H6.638v.5zm1.956 0h2.031v-.5h-2.03v.5zm2.031 0h1.879v-.5h-1.879v.5zm1.879 0h1.473v-.5h-1.473v.5zm1.473 0h.843v-.5h-.843v.5zm.843 0h.098v-.5h-.098v.5zm.095 0h.02l-.005-.5h-.008l-.007.5zm.021 0h.005l-.008-.5h-.003l.006.5zm.005 0h.006l-.01-.5h-.004l.008.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
