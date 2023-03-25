import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { VideoBackgroud } from '../../components'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { FaFacebookSquare, FaTwitterSquare, FaYoutube } from 'react-icons/fa'

import styles from '../Home/Home.module.scss'

const Home: FC = () => {
  return (
    <section className={styles.section}>
      <VideoBackgroud />
      <div className='container'>
        <div className={styles.root}>
          <div className={styles.sidebar}>
            <img
              className={styles.poster}
              src='https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg'
              alt='Rick and Morty'
            />
            <ul className={styles.trailers}>
              <li>
                <img
                  src='//kinopoisk-ru.clstorage.net/gtj164117/78ce24i-U3/Fya835xhNzqHT2TiSPt35CCaE-9j-xapmQCK6UmpPBxSC4tfvpf1vgFO-uh5TizyTOaHhf9vW4t5YyYozJD_NQJ18I_fcypk0Qty_U_2JuI-jE68c7ZJ49wd0fgR8k5ZYjDneJWk159lbtLKYlwppQi50Nm8Nh3AKi9jbvX76jELM4P0mktdELNLAPlg8H_FDN0p63aXJo2KWY3GaJB2C1Qj4U-9nNm-Z03D4lZgGvMUtsj0tBw51RJ4fkntwJwxBzCyxqZdURWyfxPVWvBB7zr9NOJwpwO1imWv-mqWQwt-HM5alKnNikVZ1Px9Uwb-FJnb5Y49LPwGb15UxP2LNSwguPi_f3sBqUgZ-lDGUeAw8TbCW7sThJ9nsPpkln0SXiDlW4S175hBWvf2UWwa8Sa_5tG6LRvjCmdJXOTOsDAmNZHIvHVzGKtGAclcxFnWK_kW4WelHYmDQY7BaIFaLVoZ5GmVncylYWPr5n9EOsMph9rAlAki_gpAVlT__Z05MgOb56Rnaxq5fS_QQPZh5xr9H-hzvSS2nGCZyFCuUgtJI9dcgI_Rj3VtwedYYC_kLbP_4Yk6JdcqYmhi4-2BHjAqkdeYc3omhWoP8Wjicfg15hnEQrgfvq5UrOxIqEgjUyLqVoGTyr5rT_L3fEcdyBKj1OO4ECD6L2ZaSMj9njMRFrnxn1BjEplvG8t48XzIF9cYw12tAbSFSq3Md5ddJVoMzVCuqfG8VlPRznhPPMcClvXGjz4O8i9xVXL64q09Fgai-KNzUzG2dS7pZMZA2SvQFudjlhW4v0Gt5HGvVCxbJ_dvtLbwlEtq0-9FYy_dL4TP-KQSHeE5bHha3PKlFxgujt-AYHIvuX8O2W3aS9c34A_CYIECooBjt-9ftV0edxjnUL6y3p1je9zVXEocwBGk6eW-Mgf4CVZWScTGkA4OBbH1hFxxGKtbPs5Mw0nSMsIpxnWDBqGKdZPYUKNdPFMc6Gy5lMmUeEbQ1VBHKfoblsz-mg05xgZLW1j5zY0SNj-G0qZYQx6Qdx_XefhQwhX8LvJvlRW8l0eu40CFQAlvKMBAsZP0nERf6tNzahL7AL_S9YgMI_4Ya359686uORMzuvOMdm0ehFMB6Xj0a-Ug2hLpQaYghJ5bouFJt0UdTCTfdJSC-Z5gZOzNf30IxyaT3NeKPQbiLGZWSMfTvzsHC4HRiXZqP7ZzHvx43Hf3AtYexkaZI4mCRJjKQItWO2sFxFOys8ynQXvr4EZoKe40perhmRQG5AVAWGPn0oEGEg2v8aVZUhiQSjn3btx8yA_-Mv1doAOEqGqy9V2TWjxrBdRAvpfzoHxM1_1nbhf6DLTY_J4yH8Y1eGtB4ceZHiIth9qkakEStHgjw13AdtAh4ifMVKQVoYtIjO5Ts3wTeTbff7mWwJVlWPfnXE000yec1uyiGDPVLGxnUNnyrxEtKIL5g2t_M7VzKddi8EPGOdoZ7mODN4amZInSTJZXHk0jwHyVisuiREXu739jK-IBhO_gmhU_0BRJUm7Ozp8PETe-6qFneBuCbAz-RPZi5y3ANNhxrhmYukmDy3Oqeh50O-13g5jpvWdAydxfSRv-BZPO9KI9OcEmbFBd_9S4FDcwj-yjZEEWsHgm3177XsASxznLZ58agrpmhPdVjEE-SxjRaryp6ppvbdHPZkcv_QmX7cOmECTUKkBzbsvVqwYMFqDSt11vGIpEHupA9nHIEsA34HWOMrmYbID2a6xWB3Ea6mihltmDdVHR8XRmBOcBut_frwoN4ztMfG7v46E3FCmn_KRbWha0XwnuWsNC5R7fKeRenDW7u1yj6HSMdzNoGeFKpIvotEtNz9FGQzHlAbfHxLU-OPk4WVZZwuecLjk2keu_akkVi0gOy1vgQPQf4RjjX7oGgJpeq8VkkXAMdQ7Te62xwJ59TcHUcEwX-yuXxsOjEi3DNmRXTeXJhjoiPpn9nH1NAYZRBs9e-FvALvw-4G2eOZyiVa_uc4FlO3g64XWOsc2HYXni109NLe4JkfLztB8Cwyhqa2za3oUaCz-Oyb5TfBKGSyvJTeVr5AnhP-FYjjyiiESC2G6NeS5YH-NgvbPQvH1w2eJ8Yw3mNqHS2oI3FdA4SmdT8MqyERsTudale3ojlGUC8UzSRMcv5zvlWro_nIJquOx-kUUIWyH3UoWZ35tPSMvObU4M6SKm-MaVIDLaCEVSa_vDsx8gIoXKqXRaP4p_Lv9q00DoKNk3xm2GGL-iY6rPXbdYOEQq_FO6rf26X0_2y3dZD-oNns3ApCoG-BRLaV7Yxa4bFg-ex713XiCsdyLjTMV6wCHNM-ZSpSGIgkawx26FQgBfDv9-tY_Vokhm79BkXjr8FKDM8a48OMMobWVtx9SIMisprvOfQn07lks6-mz5XPgawQrNeJ45poxljtJslEQETyzue7GY9rRHWtfecmc8-ySp5_ebFTjHFGxma-P-hBE5EbHxul1jHZJwOO9i9FbqMvwT0naVOLSffY_uZY5-LHsq7F6YlsC5Vn7J43JbLOQ5h_jEuTMl-wVUZXzY650nFyWp9pZaYTGmTxLaU_xi7SnQBdBEnxa5gnyu40meZgRbJM5jvbnQn3pc0_1lRRPID7rS8qIQDMESc0NZ8vWNHDMemeqoZ28DrVoy02_4WNUI_CXjRL8SiqVFoNFNokMuRAfVb4Sy2bRcZe3SQU4b8xqH8uyqHjv4LEZ1YtnpiC8uFarOhnh2I7t6HvVOwHDsIO4p0nydC4WobLfDQ6pXHXgH5GmUkuK1QUjY1G9eK942udDzrjQSxhRRS2v9044ZAD6Q1p5bSgWudgDdQORAwx3dNs1hpiCIo16RyVCxZSFqAM5Qm5f_mGlYy-ZHWjTRJaTs-L82J8c3e3lW-OC9Jgg2j_CfS2o7rXMg1mr8Ues_8wrsW4wjnKNjhM1glnkCdQbETpSd959rTfXxfmQKyhCU9OWZMzDSGEM'
                  alt=''
                />
                <p>Trailer (Season 1)</p>
              </li>
              <li>
                <img
                  src='//kinopoisk-ru.clstorage.net/gtj164117/78ce24i-U3/Fya835xhNzqHT2TiSPt35CCaE-9j-xapmQCK6UmpPBxSC4tfvpf1vgFO-uh5TizyTOaHhf9vW4t5YyYozJD_NQJ18I_fcypk0Qty_U_2JuI-jE68c7ZJ49wd0fgR8k5ZYjDneJWk159lbtLKYlwppQi50Nm8Nh3AKi9jbvX76jELM4P0mktdELNLAPlg8H_FDN0p63aXJo2KWY3GaJB2C1Qj4U-9nNm-Z03D4lZgGvMUtsj0tBw51RJ4fkntwJwxBzCyxqZdURWyfxPVWvBB7zr9NOJwpwO1imWv-mqWQwt-HM5alKnNikVZ1Px9Uwb-FJnb5Y49LPwGb15UxP2LNSwguPi_f3sBqUgZ-lDGUeAw8TbCW7sThJ9nsPpkln0SXiDlW4S175hBWvf2UWwa8Sa_5tG6LRvjCmdJXOTOsDAmNZHIvHVzGKtGAclcxFnWK_kW4WelHYmDQY7BaIFaLVoZ5GmVncylYWPr5n9EOsMph9rAlAki_gpAVlT__Z05MgOb56Rnaxq5fS_QQPZh5xr9H-hzvSS2nGCZyFCuUgtJI9dcgI_Rj3VtwedYYC_kLbP_4Yk6JdcqYmhi4-2BHjAqkdeYc3omhWoP8Wjicfg15hnEQrgfvq5UrOxIqEgjUyLqVoGTyr5rT_L3fEcdyBKj1OO4ECD6L2ZaSMj9njMRFrnxn1BjEplvG8t48XzIF9cYw12tAbSFSq3Md5ddJVoMzVCuqfG8VlPRznhPPMcClvXGjz4O8i9xVXL64q09Fgai-KNzUzG2dS7pZMZA2SvQFudjlhW4v0Gt5HGvVCxbJ_dvtLbwlEtq0-9FYy_dL4TP-KQSHeE5bHha3PKlFxgujt-AYHIvuX8O2W3aS9c34A_CYIECooBjt-9ftV0edxjnUL6y3p1je9zVXEocwBGk6eW-Mgf4CVZWScTGkA4OBbH1hFxxGKtbPs5Mw0nSMsIpxnWDBqGKdZPYUKNdPFMc6Gy5lMmUeEbQ1VBHKfoblsz-mg05xgZLW1j5zY0SNj-G0qZYQx6Qdx_XefhQwhX8LvJvlRW8l0eu40CFQAlvKMBAsZP0nERf6tNzahL7AL_S9YgMI_4Ya359686uORMzuvOMdm0ehFMB6Xj0a-Ug2hLpQaYghJ5bouFJt0UdTCTfdJSC-Z5gZOzNf30IxyaT3NeKPQbiLGZWSMfTvzsHC4HRiXZqP7ZzHvx43Hf3AtYexkaZI4mCRJjKQItWO2sFxFOys8ynQXvr4EZoKe40perhmRQG5AVAWGPn0oEGEg2v8aVZUhiQSjn3btx8yA_-Mv1doAOEqGqy9V2TWjxrBdRAvpfzoHxM1_1nbhf6DLTY_J4yH8Y1eGtB4ceZHiIth9qkakEStHgjw13AdtAh4ifMVKQVoYtIjO5Ts3wTeTbff7mWwJVlWPfnXE000yec1uyiGDPVLGxnUNnyrxEtKIL5g2t_M7VzKddi8EPGOdoZ7mODN4amZInSTJZXHk0jwHyVisuiREXu739jK-IBhO_gmhU_0BRJUm7Ozp8PETe-6qFneBuCbAz-RPZi5y3ANNhxrhmYukmDy3Oqeh50O-13g5jpvWdAydxfSRv-BZPO9KI9OcEmbFBd_9S4FDcwj-yjZEEWsHgm3177XsASxznLZ58agrpmhPdVjEE-SxjRaryp6ppvbdHPZkcv_QmX7cOmECTUKkBzbsvVqwYMFqDSt11vGIpEHupA9nHIEsA34HWOMrmYbID2a6xWB3Ea6mihltmDdVHR8XRmBOcBut_frwoN4ztMfG7v46E3FCmn_KRbWha0XwnuWsNC5R7fKeRenDW7u1yj6HSMdzNoGeFKpIvotEtNz9FGQzHlAbfHxLU-OPk4WVZZwuecLjk2keu_akkVi0gOy1vgQPQf4RjjX7oGgJpeq8VkkXAMdQ7Te62xwJ59TcHUcEwX-yuXxsOjEi3DNmRXTeXJhjoiPpn9nH1NAYZRBs9e-FvALvw-4G2eOZyiVa_uc4FlO3g64XWOsc2HYXni109NLe4JkfLztB8Cwyhqa2za3oUaCz-Oyb5TfBKGSyvJTeVr5AnhP-FYjjyiiESC2G6NeS5YH-NgvbPQvH1w2eJ8Yw3mNqHS2oI3FdA4SmdT8MqyERsTudale3ojlGUC8UzSRMcv5zvlWro_nIJquOx-kUUIWyH3UoWZ35tPSMvObU4M6SKm-MaVIDLaCEVSa_vDsx8gIoXKqXRaP4p_Lv9q00DoKNk3xm2GGL-iY6rPXbdYOEQq_FO6rf26X0_2y3dZD-oNns3ApCoG-BRLaV7Yxa4bFg-ex713XiCsdyLjTMV6wCHNM-ZSpSGIgkawx26FQgBfDv9-tY_Vokhm79BkXjr8FKDM8a48OMMobWVtx9SIMisprvOfQn07lks6-mz5XPgawQrNeJ45poxljtJslEQETyzue7GY9rRHWtfecmc8-ySp5_ebFTjHFGxma-P-hBE5EbHxul1jHZJwOO9i9FbqMvwT0naVOLSffY_uZY5-LHsq7F6YlsC5Vn7J43JbLOQ5h_jEuTMl-wVUZXzY650nFyWp9pZaYTGmTxLaU_xi7SnQBdBEnxa5gnyu40meZgRbJM5jvbnQn3pc0_1lRRPID7rS8qIQDMESc0NZ8vWNHDMemeqoZ28DrVoy02_4WNUI_CXjRL8SiqVFoNFNokMuRAfVb4Sy2bRcZe3SQU4b8xqH8uyqHjv4LEZ1YtnpiC8uFarOhnh2I7t6HvVOwHDsIO4p0nydC4WobLfDQ6pXHXgH5GmUkuK1QUjY1G9eK942udDzrjQSxhRRS2v9044ZAD6Q1p5bSgWudgDdQORAwx3dNs1hpiCIo16RyVCxZSFqAM5Qm5f_mGlYy-ZHWjTRJaTs-L82J8c3e3lW-OC9Jgg2j_CfS2o7rXMg1mr8Ues_8wrsW4wjnKNjhM1glnkCdQbETpSd959rTfXxfmQKyhCU9OWZMzDSGEM'
                  alt=''
                />
                <p>Trailer (Season 4)</p>
              </li>
              <li>
                <img
                  src='//kinopoisk-ru.clstorage.net/gtj164117/78ce24i-U3/Fya835xhNzqHT2TiSPt35CCaE-9j-xapmQCK6UmpPBxSC4tfvpf1vgFO-uh5TizyTOaHhf9vW4t5YyYozJD_NQJ18I_fcypk0Qty_U_2JuI-jE68c7ZJ49wd0fgR8k5ZYjDneJWk159lbtLKYlwppQi50Nm8Nh3AKi9jbvX76jELM4P0mktdELNLAPlg8H_FDN0p63aXJo2KWY3GaJB2C1Qj4U-9nNm-Z03D4lZgGvMUtsj0tBw51RJ4fkntwJwxBzCyxqZdURWyfxPVWvBB7zr9NOJwpwO1imWv-mqWQwt-HM5alKnNikVZ1Px9Uwb-FJnb5Y49LPwGb15UxP2LNSwguPi_f3sBqUgZ-lDGUeAw8TbCW7sThJ9nsPpkln0SXiDlW4S175hBWvf2UWwa8Sa_5tG6LRvjCmdJXOTOsDAmNZHIvHVzGKtGAclcxFnWK_kW4WelHYmDQY7BaIFaLVoZ5GmVncylYWPr5n9EOsMph9rAlAki_gpAVlT__Z05MgOb56Rnaxq5fS_QQPZh5xr9H-hzvSS2nGCZyFCuUgtJI9dcgI_Rj3VtwedYYC_kLbP_4Yk6JdcqYmhi4-2BHjAqkdeYc3omhWoP8Wjicfg15hnEQrgfvq5UrOxIqEgjUyLqVoGTyr5rT_L3fEcdyBKj1OO4ECD6L2ZaSMj9njMRFrnxn1BjEplvG8t48XzIF9cYw12tAbSFSq3Md5ddJVoMzVCuqfG8VlPRznhPPMcClvXGjz4O8i9xVXL64q09Fgai-KNzUzG2dS7pZMZA2SvQFudjlhW4v0Gt5HGvVCxbJ_dvtLbwlEtq0-9FYy_dL4TP-KQSHeE5bHha3PKlFxgujt-AYHIvuX8O2W3aS9c34A_CYIECooBjt-9ftV0edxjnUL6y3p1je9zVXEocwBGk6eW-Mgf4CVZWScTGkA4OBbH1hFxxGKtbPs5Mw0nSMsIpxnWDBqGKdZPYUKNdPFMc6Gy5lMmUeEbQ1VBHKfoblsz-mg05xgZLW1j5zY0SNj-G0qZYQx6Qdx_XefhQwhX8LvJvlRW8l0eu40CFQAlvKMBAsZP0nERf6tNzahL7AL_S9YgMI_4Ya359686uORMzuvOMdm0ehFMB6Xj0a-Ug2hLpQaYghJ5bouFJt0UdTCTfdJSC-Z5gZOzNf30IxyaT3NeKPQbiLGZWSMfTvzsHC4HRiXZqP7ZzHvx43Hf3AtYexkaZI4mCRJjKQItWO2sFxFOys8ynQXvr4EZoKe40perhmRQG5AVAWGPn0oEGEg2v8aVZUhiQSjn3btx8yA_-Mv1doAOEqGqy9V2TWjxrBdRAvpfzoHxM1_1nbhf6DLTY_J4yH8Y1eGtB4ceZHiIth9qkakEStHgjw13AdtAh4ifMVKQVoYtIjO5Ts3wTeTbff7mWwJVlWPfnXE000yec1uyiGDPVLGxnUNnyrxEtKIL5g2t_M7VzKddi8EPGOdoZ7mODN4amZInSTJZXHk0jwHyVisuiREXu739jK-IBhO_gmhU_0BRJUm7Ozp8PETe-6qFneBuCbAz-RPZi5y3ANNhxrhmYukmDy3Oqeh50O-13g5jpvWdAydxfSRv-BZPO9KI9OcEmbFBd_9S4FDcwj-yjZEEWsHgm3177XsASxznLZ58agrpmhPdVjEE-SxjRaryp6ppvbdHPZkcv_QmX7cOmECTUKkBzbsvVqwYMFqDSt11vGIpEHupA9nHIEsA34HWOMrmYbID2a6xWB3Ea6mihltmDdVHR8XRmBOcBut_frwoN4ztMfG7v46E3FCmn_KRbWha0XwnuWsNC5R7fKeRenDW7u1yj6HSMdzNoGeFKpIvotEtNz9FGQzHlAbfHxLU-OPk4WVZZwuecLjk2keu_akkVi0gOy1vgQPQf4RjjX7oGgJpeq8VkkXAMdQ7Te62xwJ59TcHUcEwX-yuXxsOjEi3DNmRXTeXJhjoiPpn9nH1NAYZRBs9e-FvALvw-4G2eOZyiVa_uc4FlO3g64XWOsc2HYXni109NLe4JkfLztB8Cwyhqa2za3oUaCz-Oyb5TfBKGSyvJTeVr5AnhP-FYjjyiiESC2G6NeS5YH-NgvbPQvH1w2eJ8Yw3mNqHS2oI3FdA4SmdT8MqyERsTudale3ojlGUC8UzSRMcv5zvlWro_nIJquOx-kUUIWyH3UoWZ35tPSMvObU4M6SKm-MaVIDLaCEVSa_vDsx8gIoXKqXRaP4p_Lv9q00DoKNk3xm2GGL-iY6rPXbdYOEQq_FO6rf26X0_2y3dZD-oNns3ApCoG-BRLaV7Yxa4bFg-ex713XiCsdyLjTMV6wCHNM-ZSpSGIgkawx26FQgBfDv9-tY_Vokhm79BkXjr8FKDM8a48OMMobWVtx9SIMisprvOfQn07lks6-mz5XPgawQrNeJ45poxljtJslEQETyzue7GY9rRHWtfecmc8-ySp5_ebFTjHFGxma-P-hBE5EbHxul1jHZJwOO9i9FbqMvwT0naVOLSffY_uZY5-LHsq7F6YlsC5Vn7J43JbLOQ5h_jEuTMl-wVUZXzY650nFyWp9pZaYTGmTxLaU_xi7SnQBdBEnxa5gnyu40meZgRbJM5jvbnQn3pc0_1lRRPID7rS8qIQDMESc0NZ8vWNHDMemeqoZ28DrVoy02_4WNUI_CXjRL8SiqVFoNFNokMuRAfVb4Sy2bRcZe3SQU4b8xqH8uyqHjv4LEZ1YtnpiC8uFarOhnh2I7t6HvVOwHDsIO4p0nydC4WobLfDQ6pXHXgH5GmUkuK1QUjY1G9eK942udDzrjQSxhRRS2v9044ZAD6Q1p5bSgWudgDdQORAwx3dNs1hpiCIo16RyVCxZSFqAM5Qm5f_mGlYy-ZHWjTRJaTs-L82J8c3e3lW-OC9Jgg2j_CfS2o7rXMg1mr8Ues_8wrsW4wjnKNjhM1glnkCdQbETpSd959rTfXxfmQKyhCU9OWZMzDSGEM'
                  alt=''
                />
                <p>Trailer (Season 7)</p>
              </li>
            </ul>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.basicInfo}>
              <div className={styles.info}>
                <div className={styles.column}>
                  <h1>
                    Rick and Morty<span>18+</span>
                  </h1>
                  <p>
                    A brilliant scientist draws his grandson into crazy
                    adventures. Outstanding Animated Series for Dan Harmon. In
                    the center of the plot is a schoolboy named Morty and his
                    grandfather Rick. Morty is the most ordinary boy who is no
                    different from his peers. Granddad, on the other hand, does
                    some unusual research on his complications and is often
                    completely inadequate. He can at any time of the day or
                    night with the capture and arrival with him on crazy
                    adventures with the help of a flying saucer built from
                    various trash that can move within the interdimensional
                    tunnel. Each time, this couple finds themselves in the most
                    unexpected situations and the most ridiculous ghosts.
                  </p>
                </div>
                <div className={styles.rating}>
                  <h2>IMDb RATING</h2>
                  <div className={styles.box}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='34'
                      height='34'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      role='presentation'
                    >
                      <path d='M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z'></path>
                    </svg>
                    <div className={styles.score}>
                      <p>
                        <span>9.1</span>/10
                      </p>
                      <p>537K</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.about}>
                <h3>About the series</h3>
                <div className={styles.row}>
                  <div className={styles.aboutItems}>
                    <div className={styles.item}>
                      <div className={styles.title}>Production year</div>
                      <div className={styles.value}>2013 (6 seasons)</div>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.title}>Country</div>
                      <div className={styles.value}>USA</div>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.title}>Genre</div>
                      <div className={styles.value}>
                        cartoon, comedy, fantasy, adventure
                      </div>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.title}>Tagline</div>
                      <div className={styles.value}>
                        <span>«Science makes sense, family doesn't»</span>
                      </div>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.title}>Director</div>
                      <div className={styles.value}>
                        Wesley Archer, Pete Michels, Johnny Tesoro...
                      </div>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.title}>Scenario</div>
                      <div className={styles.value}>
                        Dan Harmon, Justin Roiland, Tom Kauffman...
                      </div>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.title}>Producer</div>
                      <div className={styles.value}>
                        Ollie Green, Dan Harmon, Justin Roiland...
                      </div>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.title}>Composer</div>
                      <div className={styles.value}>
                        Ryan Elder, Jason Nesmith
                      </div>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.title}>Artist</div>
                      <div className={styles.value}>
                        James McDermott, Jeffrey Thompson, Robbie Erwin
                      </div>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.title}>Installation</div>
                      <div className={styles.value}>
                        Lee Harting, Nick Reczynski, Ken McKenzie...
                      </div>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.title}>Age</div>
                      <div className={styles.value}>
                        <div className={styles.highlightText}>18+</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.characters}>
                    <h4>Characters in the series</h4>
                    <ul>
                      <li>Rick Sanchez</li>
                      <li>Morty Smith</li>
                      <li>Muscular Mannie</li>
                      <li>Hamurai</li>
                      <li>Magnesium-J</li>
                      <li>Pizza-person</li>
                      <li>Greebybobe</li>
                      <li>Danny Publitz</li>
                      <li>Jerry Smith</li>
                      <li>Diablo Verde</li>
                      <li>Abradolf Lincler</li>
                    </ul>
                    <Link to={'/characters'} className={styles.allCharacters}>
                      <span> See all 834</span>
                      <HiOutlineArrowNarrowRight />
                    </Link>
                  </div>
                </div>
                <div className={styles.socials}>
                 <div className={styles.row}>
                    <h5>Follow us</h5>
                    <ul>
                      <li><FaFacebookSquare /></li>
                      <li><FaTwitterSquare /></li>
                      <li><FaYoutube /></li>
                    </ul>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
