<script>
import { browser } from '$app/environment';
import { page } from '$app/stores';

const { id } = $page.params;
if (browser) {
    window.location.href = `/catchup/${id}`;
}
</script>
