import { translator } from '../../i18n';
import { assetUrl } from '../../utils';

export function DocOverview() {
    const t = translator();

    return (
        <>
            <h2 class="doc-title">{t()('overview')}</h2>
            <p class="doc-p">{t()('ovP1')}</p>
            <h3 class="doc-subtitle">{t()('appName')}</h3>
            <p class="doc-p">{t()('ovP2')}</p>
            <img
                src={assetUrl('images/illustration-dolphin.png')}
                class="doc-img"
            />
            <h3 class="doc-subtitle">{t()('editorAppName')}</h3>
            <p class="doc-p">{t()('ovP3')}</p>
            <p class="doc-p">{t()('ovP4')}</p>
            <img
                src={assetUrl('images/illustration-batch.png')}
                class="doc-img"
            />
            <p class="doc-p">{t()('ovP5')}</p>
            <img
                src={assetUrl('images/illustration-multi-tpl.png')}
                class="doc-img"
            />
        </>
    );
}
