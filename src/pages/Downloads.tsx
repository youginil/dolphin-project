import { translator } from '../i18n';
import './Downloads.css';

const appVersion = '1.1.10-13';
const editorVersion = '0.2.0';

export default function Downloads() {
    const t = translator();

    const androidDlUrl = `https://gitee.com/i4get/store/releases/download/v1.0.0/app-v${appVersion}-standalone.apk.zip`;
    const macDlUrl = `https://gitee.com/i4get/dauphin/releases/download/v${editorVersion}/Dauphin_${editorVersion}_x64.dmg`;
    const winDlUrl = `https://gitee.com/i4get/dauphin/releases/download/v${editorVersion}/Dauphin_${editorVersion}_x64_en-US.msi`;

    return (
        <div class="text-center mt-40">
            <div class="py-5">
                <div class="logo-app"></div>
                <h3 class="text-xl mt-6">{t()('appFullName')}</h3>
                <h5 class="mt-1">v{appVersion}</h5>
                <div class="mt-6">
                    <div class="join">
                        <a
                            href={androidDlUrl}
                            target="_blank"
                            class="btn join-item"
                        >
                            <i class="bi bi-android2"></i>
                            {t()('android')}
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            class="btn join-item btn-disabled"
                        >
                            <i class="bi bi-apple"></i>
                            {t()('ios')}
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            class="btn join-item btn-disabled"
                        >
                            <i class="bi bi-windows"></i>
                            {t()('windows')}
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            class="btn join-item btn-disabled"
                        >
                            <i class="bi bi-apple"></i>
                            {t()('macos')}
                        </a>
                    </div>
                </div>
                <p class="italic mt-4">iOS, MacOS, Windows {t()('coming')}</p>
            </div>
            <div class="py-20 bg-[#508D69]">
                <div class="logo-app logo-editor"></div>
                <h3 class="text-xl mt-6">{t()('editorAppName')}</h3>
                <h5 class="mt-1">v{editorVersion}</h5>
                <div class="my-2 italic">
                    <p>{t()('developerVerifyTip')}</p>
                    <p>
                        <a
                            href="https://support.apple.com/en-vn/guide/mac-help/mh40616/mac"
                            target="_blank"
                            class="alink"
                        >
                            https://support.apple.com/en-vn/guide/mac-help/mh40616/mac
                        </a>
                    </p>
                </div>
                <div class="flex items-center justify-center mt-6">
                    <div class="join">
                        <a
                            href={macDlUrl}
                            target="_blank"
                            class="btn join-item"
                        >
                            <i class="bi bi-apple"></i>
                            {t()('macos')}
                        </a>
                        <a
                            href={winDlUrl}
                            target="_blank"
                            class="btn join-item"
                        >
                            <i class="bi bi-windows"></i>
                            {t()('windows')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
